import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { IconHalder } from "../index";
import { Button as MyButton, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { Generate_contract_Pdf } from "../../Utils/Pdfgenerator";
const DataRow = ({ title, data = null, Render = () => <></> }) => {
  return (
    <tr>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
      >
        {title}
      </th>
      <td className="py-4 px-6">
        {data ? (
          <p className="w-full mb-3 font-light text-gray-500  break-words">
            {" "}
            {data}
          </p>
        ) : (
          <Render />
        )}
      </td>
    </tr>
  );
};

const PartnerInfoRender = ({ item }) => {
  return (
    <>
      <div className="overflow-x-auto relative sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50">
                Attribut
              </th>
              <th scope="col" className="py-3 px-6">
                Valeurs
              </th>
            </tr>
          </thead>
          <tbody>
            <DataRow title={"nom complet"} data={item.email} />
            <DataRow
              title={"date naissance"}
              data={`${new Date(item.created_date).getDate()}/${new Date(
                item.created_date
              ).getMonth()}/${new Date(
                item.created_date
              ).getFullYear()}  ${String(
                new Date(item.created_date).getHours()
              ).padStart(2, "0")}:${String(
                new Date(item.created_date).getMinutes()
              ).padStart(2, "0")}`}
            />

            <DataRow title={"sexe"} data={item.numero_telephone} />
            <DataRow
              title={"ville"}
              data={item.numero_telephone_fix}
            />
            <DataRow title={"adresse"} data={item.adrress} />
            <DataRow title={"profession"} data={item.identificateur_entreprise} />
            <DataRow
              title={"tel"}
              data={item.representant_entreprise}
            />
            <DataRow title={"Email"} data={item.role_dans_entriprise} />
            <DataRow title={"Abonnement"} data={item.ville_name} />
            <DataRow title={"Device ID"} data={item.activity_name} />

            <DataRow title={"Statut"} data={item.offer} />
            <DataRow title={"Date inscription"} data={item.note} />

            <DataRow title={"Date debut abonnement"} data={item.activity_name} />
            <DataRow title={"Date Fin abonnement"} data={item.activity_name} />

            <DataRow
              title={"Statut"}
              Render={() => {
                return (
                  <div className="flex flex-row justify-center items-center gap-5 ">
                    <p>{item._status}</p>
                    {item._status == "Pending" ? (
                      <IconHalder
                        Icon={() => <MdPendingActions />}
                        style="text-[#353535]"
                      />
                    ) : item._status == "Approved" ? (
                      <div>
                        <IconHalder
                          Icon={() => <BsCheckCircleFill />}
                          style="text-[#0012ff]"
                        />
                      </div>
                    ) : (
                      <div>
                        <IconHalder
                          Icon={() => <IoIosCloseCircle />}
                          style="text-[#ff0000]"
                        />
                      </div>
                    )}
                  </div>
                );
              }}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};
function PartnerInfo({ open, OnClick, data, setRefresh }) {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [loading, setloading] = useState(false);

  const hadlerClose = () => {
    OnClick();
  };
  const hadlerResponse = async (id, response) => {
    setloading(true);

    let blob = await Generate_contract_Pdf(data);
    const formData = new FormData();
    const str = JSON.stringify({
      partner_id: id,
      response: response,
    });

    formData.append("file", blob);
    formData.append("data", str);
    try {
      const req = await fetch(`${BaseUrl}/admin/Response_partner_form`, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        body: formData,
      });
      console.log(await req.json());
    } catch (err) {
      console.log(err);
    }
    setloading(false);
    setRefresh((i) => i + 1);
  };
  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    console.log(data);
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        fullWidth={true}
        onClose={hadlerClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <PartnerInfoRender item={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PartnerInfo;

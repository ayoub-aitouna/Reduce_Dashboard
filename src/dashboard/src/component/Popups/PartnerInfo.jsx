/* eslint-disable jsx-a11y/alt-text */
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
import { PrintDate, formatDate } from '../../Utils/Date'


const DataRow = ({ title, data = null, Render = () => <></> }) => {
  return (
    <tr>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        {title}
      </th>
      <td className="py-4 px-6">
        {data ? (
          <p className="w-full mb-3 font-light text-gray-500 dark:text-gray-400 break-words">
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
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Attribut
              </th>
              <th scope="col" className="py-3 px-6">
                Valeurs
              </th>
            </tr>
          </thead>
          <tbody>
            <DataRow title={"#"} data={item.id} />
            <DataRow
              title={"Submited At"}
              data={formatDate(item.created_date)}
            />
            <DataRow
              title={"Logo"}
              Render={() => {
                return (
                  <img
                    className="w-[50px] h-[50px] rounded-full object-cover bg-gray-400 overflow-hidden"
                    src={
                      item.avatar_Url === '' || item.avatar_Url === undefined ?
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png" :
                        item.avatar_Url
                    }
                    srcSet=""
                  />
                );
              }}
            />
            <DataRow title={"email"} data={item.email} />
            <DataRow title={"Numero Telephone"} data={item.numero_telephone} />
            <DataRow
              title={"Numero Telephone Fix"}
              data={item.numero_telephone_fix}
            />
            <DataRow title={"Raison sociale"} data={item.nome_entreprise} />
            <DataRow title={"Adrrees"} data={item.adrress} />
            <DataRow title={"ICE"} data={item.identificateur_entreprise} />
            <DataRow
              title={"Représentant Entreprise"}
              data={item.representant_entreprise}
            />
            <DataRow title={"Fonction"} data={item.role_dans_entriprise} />
            <DataRow title={"Ville"} data={item.ville_name} />
            <DataRow title={"Secteur d'activité	"} data={item.activity_name} />

            <DataRow title={"Offer"} data={item.offer} />
            <DataRow title={"Note"} data={item.note} />

            <DataRow title={"Secteur d'activité	"} data={item.activity_name} />
            <DataRow
              title={"Contract PDF"}
              Render={() => <a href={item.contract_Url}>Voir Le Contrat</a>}
            />
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
    } catch (err) {
      console.error(err);
    }
    setloading(false);
    setRefresh((i) => i + 1);
  };
  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

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
        {data._status == "Pending" ? (
          <DialogActions>
            <Button
              onClick={async (e) => {
                hadlerResponse(data.id, "Approved");
              }}
            >
              <MyButton
                Icon={() => LoadingIcon(loading)}
                title="Acceptez"
                style="p-[20px] font-bold text-xl"
              />
            </Button>
            <Button onClick={() => hadlerResponse(data.id, "Rejected")}>
              <MyButton
                Icon={() => LoadingIcon(loading)}
                title="Rejetez"
                style=" p-[20px] font-bold text-xl !bg-red-500"
              />
            </Button>
          </DialogActions>
        ) : (
          <></>
        )}
      </Dialog>
    </div>
  );
}

export default PartnerInfo;

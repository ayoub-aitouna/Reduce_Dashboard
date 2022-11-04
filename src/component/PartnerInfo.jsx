import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { IconHalder } from "./index";
import { Button as MyButton, LoadingIcon } from "./index";
import { BaseUrl, Coockies_name } from "../constants";
import { useCookies } from "react-cookie";

const DataRow = ({ title, data = null, Render = () => <></> }) => {
  return (
    <li class="px-6 py-4 whitespace-nowrap text-sm font-medium w-full h-[107px]">
      <div class="grid overflow-hidden grid-cols-4 grid-rows-2 gap-2 rounded-mg h-full p-1">
        <div class="box row-start-1 row-span-6 col-start-3 col-end-1 flex flex-col justify-center items-start">
          {title}
        </div>
        <div class="box row-span-6 col-start-3 col-end-12  flex flex-row justify-end items-center">
          <p className="mr-auto">: </p> {data ? <p>{data}</p> : <Render />}
        </div>
      </div>
    </li>
  );
};

const PartnerInfoRender = ({ item }) => {
  return (
    <>
      <ul className="w-full h-full  flex flex-col justify-center items-center mt-5 gap-0 ">
        <DataRow title={"#"} data={item.id} />
        <DataRow
          title={"Logo"}
          Render={() => {
            return (
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png`}
                alt="entreprise Logo"
                srcset=""
              />
            );
          }}
        />
        <DataRow title={"Raison sociale"} data={item.nome_entreprise} />
        <DataRow title={"ICE"} data={item.identificateur_entreprise} />
        <DataRow
          title={"Représentant Entreprise"}
          data={item.representant_entreprise}
        />
        <DataRow title={"Fonction"} data={item.role_dans_entriprise} />
        <DataRow title={"Ville"} data={item.ville_name} />
        <DataRow title={"Secteur d'activité	"} data={item.activity_name} />
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
      </ul>
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
    try {
      const req = await fetch(`${BaseUrl}/admin/Response_partner_form`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          partner_id: id,
          response: response,
        }),
      });
      setRefresh((i) => i + 1);
      setloading(false);
    } catch (err) {
      setRefresh((i) => i + 1);

      setloading(false);
    }
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

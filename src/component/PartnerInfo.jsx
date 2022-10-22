import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "./index";
import { Button as MyButton } from "./index";
import { BaseUrl } from "../constants";

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
                src={item.avatar_Url}
                alt="entreprise Logo"
                srcset=""
              />
            );
          }}
        />
        <DataRow title={"Nome Entreprise"} data={item.nome_entreprise} />
        <DataRow
          title={"Identificateur Entreprise"}
          data={item.identificateur_entreprise}
        />
        <DataRow
          title={"Representant Rntreprise"}
          data={item.representant_entreprise}
        />
        <DataRow
          title={"Role Dans Entriprise"}
          data={item.role_dans_entriprise}
        />
        <DataRow title={"Ville Nome"} data={item.ville_nome} />
        <DataRow
          title={"Activity Entrprise Nome"}
          data={item.activity_entrprise_nome}
        />
        <DataRow
          title={"Status"}
          Render={() => {
            return (
              <div className="flex flex-row justify-center items-center ">
                <p>{item.status}</p>
                {item.status == "Pending" ? (
                  <IconHalder
                    Icon={() => <MdPendingActions />}
                    style="text-[#353535]"
                  />
                ) : item.status == "Acepted" ? (
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
function PartnerInfo({ open, OnClick, data }) {
  const hadlerClose = () => {
    OnClick();
  };
  const hadlerResponse = async (id, response) => {
    try {
      const req = await fetch(`${BaseUrl}/admin/edit_done`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          partner_id: id,
          response: response,
        }),
      });
      hadlerClose();
    } catch (err) {
      hadlerClose();
    }
  };

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
        {data.status == "Pending" ? (
          <DialogActions>
            <Button
              onClick={async (e) => {
                hadlerResponse(data.id, "Approved");
              }}
            >
              <MyButton title="Accept" style="p-[20px] font-bold text-xl" />
            </Button>
            <Button onClick={() => hadlerResponse(data.id, "Rejected")}>
              <MyButton
                title="Reject"
                style="bg-red-500 p-[20px] font-bold text-xl"
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

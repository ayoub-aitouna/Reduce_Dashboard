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
const PartnerInfoRender = ({ item }) => {
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 h-full w-full place-content-center place-items-center ">
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.id}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={item.avatar_Url}
            alt="entreprise Logo"
            srcset=""
          />
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.nome_entreprise}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.identificateur_entreprise}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.representant_entreprise}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.role_dans_entriprise}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.ville_nome}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          {item.activity_entrprise_nome}
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[30px] ">
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
        </li>
        <li class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
          <IconHalder
            Icon={() => <BsFillArrowRightSquareFill />}
            style="text-[20px]"
          />
        </li>
      </ul>
    </>
  );
};
function PartnerInfo({ open, OnClick, data }) {
  const hadlerClose = () => {
    OnClick();
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={hadlerClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Partner Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            View All partner Information
          </DialogContentText>
          <PartnerInfoRender item={data} />
        </DialogContent>
        <DialogActions>
          <Button onClick={hadlerClose}>
            <MyButton title="Accept" style="p-[20px] font-bold text-xl" />
          </Button>
          <Button onClick={hadlerClose}>
            <MyButton
              title="Reject"
              style="bg-red-500 p-[20px] font-bold text-xl"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PartnerInfo;

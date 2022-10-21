import React, { useState } from "react";
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
import { Button as MyButton, Filter_Selector } from "./index";

const InputRow = ({ title, Input }) => {
  return (
    <>
      <div className="flex flex-col justify-center item-start">
        <p>{title}</p>
        <Input />
      </div>
    </>
  );
};
const Fill_Form = () => {
  let [data, setdata] = useState({
    partner_name: "",
    partner_address: "",
    ville: 0,
  });
  return (
    <form class="w-full max-w-lg ">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Partner Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            value={data.partner_name}
            onChange={(e) => {
              setdata({ ...data, partner_name: e.target.value });
            }}
            placeholder="Jane Doe"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Partner Adreess
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.partner_address}
            onChange={(e) => {
              setdata({ ...data, partner_address: e.target.value });
            }}
            type="text"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Filter_Selector
            title={"Ville"}
            onchange={(e) => {
              setdata({ ...data, ville: e.target.value });
            }}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Marrakech" },
              { value: 2, name: "Beni Mellal" },
            ]}
            styles={"!max-w-full"}
          />
        </div>
      </div>
    </form>
  );
};

function Add_new_task({ open, OnClick, data }) {
  const hadlerClose = () => {
    OnClick();
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
        <DialogTitle>{"Add New Admin"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p class="text-gray-600 text-xs ">
              please fill the information about the task you want to make
            </p>
          </DialogContentText>
        </DialogContent>
        <div className="w-full grid place-content-center">
          <Fill_Form />
        </div>
        <div className="h-[60px]"></div>
        <DialogActions>
          <Button onClick={hadlerClose}>
            <MyButton
              title="Add task"
              style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
            />
          </Button>
          <Button onClick={hadlerClose}>
            <MyButton
              title="cancle"
              style="!bg-red-500 p-[20px]  font-bold text-xl !p-[1px]"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Add_new_task;

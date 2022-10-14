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
  return (
    <form class="w-full max-w-lg ">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Admin Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            placeholder="Jane Doe"
          />
          <p class="text-gray-600 text-xs italic">
            this name will be shown on the dashboard
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Example@email.com"
          />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="password"
            placeholder="**********"
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Filter_Selector
            title={"Ville"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Marrakech" },
              { value: 2, name: "Beni Mellal" },
            ]}
            styles={"!max-w-full"}
          />
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Filter_Selector
            title={"Role"}
            options={[
              { value: "", name: "" },
              { value: "Admin", name: "Admin" },
              { value: "Manager", name: "Manager" },
            ]}
            styles={"!max-w-full"}
          />
        </div>
      </div>
    </form>
  );
};

function AddNewAdmin({ open, OnClick, data }) {
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
              please fill the information of the admin you want to add
            </p>
          </DialogContentText>
        </DialogContent>
        <div className="w-full grid place-content-center">
          <Fill_Form />
        </div>
        <div className="h-[100px]"></div>
        <DialogActions>
          <Button onClick={hadlerClose}>
            <MyButton
              title="Add Admin"
              style="bg-red-500 p-[20px] font-bold text-xl p-[10px]"
            />
          </Button>
          <Button onClick={hadlerClose}>
            <MyButton
              title="cancle"
              style="!bg-red-500 p-[20px]  font-bold text-xl p-[10px]"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewAdmin;

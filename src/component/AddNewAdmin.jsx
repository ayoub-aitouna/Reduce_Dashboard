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
import { BaseUrl } from "../constants";

async function submite(data, setloading) {
  try {
    const req = await fetch(`${BaseUrl}/api/v1/auth/admin}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    const data = req.json();
  } catch (err) {}
}
const StartIcon = (loading) => {
  return (
    <>
      {" "}
      {loading ? (
        <svg
          className="h-7 w-7 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <svg
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.671692 22.8699C0.288391 22.4866 0.253545 21.8868 0.567156 21.4642L0.671692 21.3431L9.98455 12.0297L0.671692 2.71638C0.288391 2.33308 0.253545 1.73328 0.567156 1.31061L0.671692 1.18952C1.05499 0.806219 1.6548 0.771373 2.07746 1.08498L2.19855 1.18952L12.2753 11.2663C12.6586 11.6496 12.6935 12.2494 12.3799 12.6721L12.2753 12.7932L2.19855 22.8699C1.77692 23.2916 1.09332 23.2916 0.671692 22.8699Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};
const Fill_Form = (data, setdata) => {
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
            value={data.admin_name}
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

function AddNewAdmin({ open, OnClick }) {
  let [data, setdata] = useState({
    partner_name: "",
    partner_address: "",
    ville: 0,
  });
  const [loading, setloading] = useState(false);
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
          <Fill_Form data={data} setdata={setdata} />
        </div>
        <div className="h-[100px]"></div>
        <DialogActions>
          <Button
            onClick={(e) => {
              setloading(true);
              submite(data, setloading);
            }}
          >
            <MyButton
              Icon={() => StartIcon(loading)}
              title="Add Admin"
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

export default AddNewAdmin;

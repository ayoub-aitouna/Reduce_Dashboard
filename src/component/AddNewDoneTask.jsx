import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, Filter_Selector, LoadingIcon } from "./index";
import { BaseUrl, Coockies_name } from "../constants";
import { get_villes } from "../Utils/villes/get_villes";

import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

const Fill_Form = ({ data, setdata }) => {
  let [villes, setvilles] = useState([]);

  useEffect(() => {
    get_villes(setvilles);
  }, []);
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
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Filter_Selector
            title={"partner status"}
            Filter={data.partner_status}
            setFilter={(value) => {
              setdata({ ...data, partner_status: value });
            }}
            options={[
              { value: "not_intrested", name: "not intressted" },
              { value: "intrested", name: "intrested" },
              { value: "thinking", name: "thinking" },
            ]}
            styles={"!max-w-full"}
          />
        </div>
      </div>
    </form>
  );
};

function AddNewDoneTask({ open, OnClick }) {
  let [data, setdata] = useState({
    partner_name: "",
    partner_status: 0,
  });
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

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
        <DialogTitle>{"Add s  Task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p class="text-gray-600 text-xs ">
              please fill the information about the task you want to make
            </p>
          </DialogContentText>
        </DialogContent>
        <div className="w-full grid place-content-center">
          <Fill_Form data={data} setdata={setdata} />
        </div>
        <div className="h-[60px]"></div>
        <DialogActions>
          <Button
            onClick={async (e) => {
              setloading(true);
              try {
                const req = await fetch(`${BaseUrl}/Tasks/add_done`, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${cookies.accesToken}`,
                  },
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(data),
                });
                setloading(false);
              } catch (err) {
                setloading(false);
              }
            }}
          >
            <MyButton
              title="Add task"
              Icon={() => LoadingIcon(loading)}
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

export default AddNewDoneTask;

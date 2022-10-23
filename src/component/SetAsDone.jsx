import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, Filter_Selector, LoadingIcon } from "./index";
import { BaseUrl, Coockies_name } from "../constants";

import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
const Fill_Form = ({ data, setdata }) => {
  return (
    <form class="w-full max-w-lg ">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
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

function SetAsDone({ open, OnClick, item }) {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  let [data, setdata] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setdata({
      id: item.id,
      partner_name: item.partner_name,
      partner_status: "not_intrested",
    });
  }, [open]);
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
        <DialogTitle>{"Set this Task as Done"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p class="text-gray-600 text-xs ">
              please fill the information about the task make change
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
                const req = await fetch(`${BaseUrl}/Tasks/set_task_done`, {
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

                if (req.ok) {
                } else {
                }
              } catch (err) {
                setloading(false);
                console.error(err);
              }
            }}
          >
            <MyButton
              title="Set As Done"
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

export default SetAsDone;

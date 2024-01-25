import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, FilterSelector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";

import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
const Fill_Form = ({ data, setdata }) => {
  return (
    <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <FilterSelector
            title={"Partenaire Statut"}
            Filter={data.partner_status}
            setFilter={(value) => {
              setdata({ ...data, partner_status: value });
            }}
            options={[
              { value: "", name: "" },
              { value: "not_intrested", name: "Pas intéressé" },
              { value: "intrested", name: "Intéressé" },
              { value: "thinking", name: "En cours" },
            ]}
            styles={"!max-w-full"}
          />
        </div>
      </div>
    </form>
  );
};

function SetAsDone({ open, OnClick, item, setrefrech }) {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  let [data, setdata] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setdata(item);
  }, [open]);

  const hadlerClose = () => {
    OnClick();
  };
  useEffect(() => {
    if (!loading) {
      setrefrech((per) => per + 1);
      hadlerClose();
    }
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
        <DialogTitle>{"Tâche effectuée"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p className="text-gray-600 text-xs ">
              Remplissez les champs vides
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
              title="Confirmez"
              Icon={() => LoadingIcon(loading)}
              style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
            />
          </Button>
          <Button onClick={hadlerClose}>
            <MyButton
              title="Annulez"
              style="!bg-red-500 p-[20px]  font-bold text-xl !p-[1px]"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SetAsDone;

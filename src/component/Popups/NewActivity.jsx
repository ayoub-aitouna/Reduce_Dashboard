import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, Filter_Selector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { setDate } from "date-fns";

const Fill_Form = ({ data, setdata }) => {
  return (
    <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center">
        <div className="w-full px-3">

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
            htmlFor="grid-name"
          >
            Activity Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            value={data.partner_name}
            onChange={(e) => {
              setdata({ ...data, Activity: e.target.value });
            }}
            placeholder="Jane Doe"
          />
        </div>
        <Button variant="contained" component="label" className="w-[50%] h-[60px] mt-5">
          Upload LOGO
          <input hidden accept="image/*" multiple type="file" onChange={(event) => setdata({ ...data, logo: event.target.files[0] })
          } />
        </Button>
      </div>
    </form>
  );
};

function AddActivity({ open, OnClick, setRefresh }) {
  let [data, setdata] = useState({
    Activity: ""
  });
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  const [loading, setloading] = useState(false);
  const hadlerClose = () => {
    OnClick();
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
        <DialogTitle>{"Ajoutez une Activity"}</DialogTitle>
        <DialogContent>
          <div className="w-full grid place-content-center">
            <Fill_Form data={data} setdata={setdata} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async (e) => {
              setloading(true);
              try {
                const formData = new FormData();
                formData.append("images", data.logo);
                formData.append("data", JSON.stringify(data));
                const req = await fetch(`${BaseUrl}/Activities/Add`, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  headers: {
                    Authorization: `Bearer ${cookies.accesToken}`,
                  },
                  referrerPolicy: "no-referrer",
                  body: formData,
                });
               } catch (err) {
              } finally {
                setDate([]);
                setloading(false);
              }
            }}
          >
            <MyButton
              title="Confirmez"
              Icon={() => LoadingIcon(loading)}
              style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddActivity;

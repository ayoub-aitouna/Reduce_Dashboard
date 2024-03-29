import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { ImgInput } from "../../Utils/ImgInput";

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
          <ImgInput width={500} height={500} call={(file) => { setdata({ ...data, logo: file }) }} />
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
  const handle_request = async () => {
    try {
      setloading(true);

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
      console.log("OK DONE");
    } catch (err) {
      console.log("Error " + err);
    } finally {
      console.log("Finally");
      setdata([]);
      setloading(false);
      setRefresh((val) => val + 1);
    }
  }
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
              handle_request();
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

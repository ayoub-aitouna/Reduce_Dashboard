import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, Filter_Selector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_villes } from "../../Utils/villes/get_villes";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

const Fill_Form = ({ data, setdata }) => {
  let [villes, setvilles] = useState([{ value: 0, name: "" }]);

  useEffect(() => {
    get_villes(setvilles);
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Partenaire
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            value={data.partner_name}
            onChange={(e) => {
              setdata({ ...data, partner_name: e.target.value });
            }}
            placeholder="Jane Doe"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.full_name}
            onChange={(e) => {
              setdata({ ...data, full_name: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            partner address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.adrress}
            onChange={(e) => {
              setdata({ ...data, adrress: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Phone Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.phone_number}
            onChange={(e) => {
              setdata({ ...data, phone_number: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-name"
          >
            Note
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.note}
            onChange={(e) => {
              setdata({ ...data, note: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="w-full  px-3 mb-6 md:mb-0 flex flex-row justify-between items-center w-full">
          <Filter_Selector
            title={"Ville"}
            Filter={data.ville}
            setFilter={(value) => {
              setdata({ ...data, ville: value });
            }}
            options={villes}
            styles={"!max-w-full"}
          />
          <div className="flex flex-col justify-center items-start">
            <h3 className="block font-black mb-2 text-sm  text-gray-900 dark:text-gray-400">
              {" "}
              Selece Date
            </h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of visite"
                value={data.visite_date}
                onChange={(newValue) => {
                  try {
                    setdata({
                      ...data,
                      visite_date: newValue.$d
                        .toISOString()
                        .slice(0, 19)
                        .replace("T", " "),
                    });
                  } catch (error) {}
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <Filter_Selector
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

function AddNewDoneTask({ open, OnClick, setRef }) {
  let [data, setdata] = useState({
    id: 1,
    partner_name: "",
    partner_status: "",
    note: "",
    full_name: "",
    phone_number: "",
    visite_date: dayjs().$d.toISOString().slice(0, 19).replace("T", " "),
    adrress: "",
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
        <DialogTitle>{"Ajoutez une Tâche"}</DialogTitle>
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
                setRef((val) => val + 1);
                setloading(false);
              } catch (err) {
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

export default AddNewDoneTask;

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Button as MyButton, Filter_Selector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_villes } from "../../Utils/villes/get_villes";
import { useCookies } from "react-cookie";
import { get_Activity } from "../../Utils/Activities/Activities";
import { get_profesion } from "../../Utils/profesion/Profesion";

const UpdateClinets = ({ open, OnClick, partner, setRefresh, is_update }) => {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [loading, setloading] = useState(false);

  const [data, setdata] = useState({
    full_name: "", birth_date: "", sexe: "", ville: 0,
    adresse: "", profession: 0, tel: "", email: "", abonnement: "",
    statut: "", date_fin_abonnement: ""
  });

  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    if (partner != null)
      setdata(partner);
  }, [partner]);

  const handle_update_create = async () => {
    setloading(true);
    setdata({ ...data, admin: true });
    try {
      const req = await fetch(`${BaseUrl}/${is_update ? 'clients/' : 'auth/new_client'}`, {
        method: is_update ? 'PUT' : 'POST',
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      setRefresh((val) => val + 1);
      setloading(false);
    } catch (err) {
      setloading(false);
    }
  }

  const toggle_status = async () => {
    setloading(true);
    try {
      const req = await fetch(`${BaseUrl}/clients/change_status`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
        body: { statut: data.status === "Activé" ? "Desactivé" : data.status },
      });
      setRefresh((val) => val + 1);
      setloading(false);
    } catch (err) {
      setloading(false);
    }
  }

  const reinit_device_id = async () => {
    setloading(true);
    try {
      const req = await fetch(`${BaseUrl}/clients/setDeviceId?id=${data.id}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      setRefresh((val) => val + 1);
      setloading(false);
    } catch (err) {
      setloading(false);
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
        <DialogTitle>{"Mettre à Jour Ce Abone"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p className="text-gray-600 text-xs ">Remplissez les champs vides</p>
          </DialogContentText>
        </DialogContent>
        <div className="w-full grid place-content-center">
          <Fill_Form data={data} setdata={setdata} />
        </div>
        <div className="h-[60px]"></div>
        <DialogActions>
          <div className="flex flex-col w-full">
            {is_update ? <div className="flex flex-row ">
              <Button
                onClick={async (e) => reinit_device_id()}
              >
                <MyButton
                  orientation={1}
                  title="Reinitialiser ID"
                  Icon={() => LoadingIcon(loading)}
                  style="bg-gray-500 p-[20px] font-bold text-xl !p-[1px]"
                />
              </Button>
              <Button
                onClick={async (e) => toggle_status()}
              >
                <MyButton
                  orientation={1}
                  title="activer/desactiver"
                  Icon={() => LoadingIcon(loading)}
                  style="bg-gray-500 p-[20px] font-bold text-xl !p-[1px]"
                />
              </Button>
            </div> : <></>}
            <Button onClick={async (e) => handle_update_create()}>
              <MyButton
                orientation={1}
                title="Valide"
                Icon={() => LoadingIcon(loading)}
                style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
              />
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Fill_Form = ({ data, setdata }) => {
  let [villes, setvilles] = useState([]);
  const [Profession, setProfession] = useState([]);

  useEffect(() => {
    get_villes(setvilles);
    get_profesion(setProfession);
  }, []);


  return (
    <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">

        {Object.keys(data).map((key) => (
          (key === 'full_name' || key == 'adresse' || key == 'email' || key == 'tel') && (
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                {key}
              </label>
              <input
                key={key}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={`grid-${key}`}
                value={data[key]}
                onChange={(e) => {
                  setdata({ ...data, [key]: e.target.value });
                }}
                type="text"
              />
            </div>
          )
        ))}
        <div className="flex flex-wrap  flex- -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Filter_Selector
              title={"Ville"}
              Filter={data.ville}
              setFilter={(value) => setdata({ ...data, ville: value })}
              options={villes}
              styles={"!max-w-full"}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Filter_Selector
              title={"profession"}
              Filter={data.profession}
              setFilter={(value) => setdata({ ...data, profession: value })}
              options={Profession}
              styles={"!max-w-full"}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <Filter_Selector
              title={"sexe"}
              Filter={data.sexe}
              setFilter={(value) => setdata({ ...data, sexe: value })}
              options={[
                { value: "", name: "NONE" },
                { value: "M", name: "Male" },
                { value: "F", name: "Female" },
              ]}
              styles={"!max-w-full"}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
            <Filter_Selector
              title={"abonnement"}
              Filter={data.abonnement}
              setFilter={(value) => setdata({ ...data, abonnement: value })}
              options={[
                { value: "Abonne", name: "Abonne" },
                { value: "Gratuit", name: "Gratuit" },
                { value: "Routier", name: "Routier" },
                { value: "investisseur", name: "investisseur" },
              ]}
              styles={"!max-w-full"}
            />
          </div>
          <div className="flex flex-row justify-center items=center" >
            <div className="flex flex-col w-full justify-center items-start ml-3   ">
              <h3 className="block font-black mb-2 text-sm  text-gray-900 dark:text-gray-400 mt-4">
                {" "}
                Selece Date
              </h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="birth date"
                  value={data.birth_date || ''}
                  onChange={(newValue) => {
                    try {
                      setdata({
                        ...data,
                        birth_date: newValue.$d
                          .toISOString()
                          .slice(0, 19)
                          .replace("T", " "),
                      });
                    } catch (error) { }
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="flex flex-col w-full justify-center items-start ml-3   ">
              <h3 className="block font-black mb-2 text-sm  text-gray-900 dark:text-gray-400 mt-4">
                {" "}
                Selece Date
              </h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="birth date"
                  value={data.birth_date || ''}
                  onChange={(newValue) => {
                    try {
                      setdata({
                        ...data,
                        birth_date: newValue.$d
                          .toISOString()
                          .slice(0, 19)
                          .replace("T", " "),
                      });
                    } catch (error) { }
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UpdateClinets;

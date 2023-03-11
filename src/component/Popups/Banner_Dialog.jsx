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
import { useCookies } from "react-cookie";

const Banner_Dialog = ({ open, OnClick, items, setRefresh, is_update }) => {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [data, setdata] = useState({
    Baniere_ordre: 0, Logo: "",
    Couverture: "", Offer: "", Adresse: "", Tel: "", statut: ""
  });
  const [loading, setloading] = useState(false);
  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    if (items != null)
      setdata(items);
  }, [items]);

  const handle_update_create = async () => {
    setloading(true);
    try {
      const req = await fetch(`${BaseUrl}/${is_update ? 'clients/update' : 'auth/new_client'}`, {
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
        <DialogTitle>{"Banner"}</DialogTitle>
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
  return (
    <form className="w-full max-w-lg ">
      <div className="w-full flex flex-row justify-around p-5">
        <Button variant="contained" component="label">
          Upload LOGO
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button variant="contained" component="label">
          Upload COVER
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">

        {Object.keys(data).map((key) => (
          (key !== "statut" && key != "Logo" && key != "Couverture") && (
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
          <div className="w-full px-3 mb-6 md:mb-0">
            <Filter_Selector
              title={"statut"}
              Filter={data.statut}
              setFilter={(value) => setdata({ ...data, statut: value })}
              options={[ { value: "activer", name: "activer" }, { value: "Desactiver", name: "Desactiver" }]}
              styles={"!max-w-full"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Banner_Dialog;

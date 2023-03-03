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
import { get_Activity } from "../../Utils/Activities/Activities";

const UpdateClinets = ({ open, OnClick, partner, setRefresh }) => {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);
  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    setdata(partner);
  }, [partner]);

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
            <div className="flex flex-row ">
              <Button
                onClick={async (e) => {
                  setloading(true);
                  try {
                    const req = await fetch(`${BaseUrl}/Admin/update_partner`, {
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
                }}
              >
                <MyButton
                  orientation={1}
                  title="Reinitialiser ID"
                  Icon={() => LoadingIcon(loading)}
                  style="bg-gray-500 p-[20px] font-bold text-xl !p-[1px]"
                />
              </Button>
              <Button
                onClick={async (e) => {
                  setloading(true);
                  try {
                    const req = await fetch(`${BaseUrl}/Admin/update_partner`, {
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
                }}
              >
                <MyButton
                  orientation={1}
                  title="activer/desactiver"
                  Icon={() => LoadingIcon(loading)}
                  style="bg-gray-500 p-[20px] font-bold text-xl !p-[1px]"
                />
              </Button>
            </div>
            <Button
              onClick={async (e) => {
                setloading(true);
                try {
                  const req = await fetch(`${BaseUrl}/Admin/update_partner`, {
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
              }}
            >
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
  const [Activities, setActivities] = useState([]);

  useEffect(() => {
    get_villes(setvilles);
    get_Activity(setActivities);
  }, []);

  return (
    <form className="w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            nom complet:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            type="text"
            value={data.nome_entreprise}
            onChange={(e) => {
              setdata({ ...data, nome_entreprise: e.target.value });
            }}
            placeholder="Jane Doe"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            date naissance:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.identificateur_entreprise}
            onChange={(e) => {
              setdata({ ...data, identificateur_entreprise: e.target.value });
            }}
            type="text"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            profession:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.representant_entreprise}
            onChange={(e) => {
              setdata({ ...data, representant_entreprise: e.target.value });
            }}
            type="text"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            tel:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.role_dans_entriprise}
            onChange={(e) => {
              setdata({ ...data, role_dans_entriprise: e.target.value });
            }}
            type="text"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            ID:
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
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <Filter_Selector
              title={"Ville"}
              Filter={data.ville}
              setFilter={(value) => {
                setdata({ ...data, ville: value });
              }}
              options={villes}
              styles={"!max-w-full"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default UpdateClinets;

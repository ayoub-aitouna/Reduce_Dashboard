import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, FilterSelector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_villes } from "../../Utils/villes/get_villes";
import { useCookies } from "react-cookie";
import { get_Activity } from "../../Utils/Activities/Activities";
import { ImgInput } from "../../Utils/ImgInput";
import { DefaultPartner } from "../../constants";
import FormData from 'form-data';

const NewPartner = ({ open, OnClick, setRefresh }) => {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [data, setdata] = useState(DefaultPartner);
  const [loading, setloading] = useState(false);
  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    setdata(DefaultPartner);
  }, [open]);

  const handle_submit = async () => {
    console.table(data);
    const emptyFields = Object.values(data)
      .filter((value) => !value);

    if (emptyFields.length > 0) {
      setloading(false);
      alert("Please fill all required fields. ");
      return;
    }
    setloading(true);
    const formData = new FormData();
    formData.append("images", data.logo);
    formData.append("images", data.cover);
    formData.append("data", JSON.stringify(data));
    try {
      await fetch(`${BaseUrl}/admin/new_partner`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
        body: formData,
      });
      setRefresh((val) => val + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setloading(false);
      setdata({});
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
        <DialogTitle>{"Mettre à Jour Ce Partenaire"}</DialogTitle>
        <DialogContent>
          <div className="w-full grid place-content-center">
            <Fill_Form data={data} setdata={setdata} />
          </div>
          <div className="h-[60px]"></div>

          <DialogActions>
            <div className="flex flex-col">
              <div className="flex flex-row">

              </div>
            </div>
            <Button
              onClick={async (e) => { handle_submit() }}
            >
              <MyButton
                title="Confirmez"
                Icon={() => LoadingIcon(loading)}
                style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
              />
            </Button>
          </DialogActions>
        </DialogContent>

      </Dialog>
    </div>
  );
};

const Fill_Form = ({ data, setdata }) => {
  let [villes, setvilles] = useState([]);
  const [Activities, setActivities] = useState([]);
  const GetValues = async () => {
    await get_villes(setvilles);
    await get_Activity(setActivities);

  }
  useEffect(() => {
    GetValues();
  }, []);

  return (
    <form className="w-full max-w-lg ">
      <div className="w-full flex flex-row justify-around p-5">
        <Button variant="contained" component="label">
          Upload LOGO
          <ImgInput width={500} height={500} call={(file) => { setdata({ ...data, logo: file, logo_selected: true }) }} />
        </Button>
        <Button variant="contained" component="label">
          Upload COVER
          <ImgInput width={500} height={500} call={(file) => { setdata({ ...data, cover: file, cover_selected: true }) }} />
        </Button>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            Raison sociale
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
            ICE
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
            Représentant Entreprise
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
            Fonction
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
            Adresse
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
            htmlFor="grid-name"
          >
            Offer
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name"
            value={data.offer}
            onChange={(e) => {
              setdata({ ...data, offer: e.target.value });
            }}
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
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

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <FilterSelector
              title={"Ville"}
              Filter={data.ville}
              setFilter={(value) => {
                setdata({ ...data, ville: value });
              }}
              options={villes}
              styles={"!max-w-full"}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <FilterSelector
              title={"d'activité"}
              Filter={data.activity_entrprise}
              setFilter={(value) => {
                setdata({ ...data, activity_entrprise: value });
              }}
              options={Activities}
              styles={"!max-w-full"}
            />
          </div>

          <div className="w-full px-3 mb-6 md:mb-0">
            <FilterSelector
              title={"Partenaire Statut"}
              Filter={data._status}
              setFilter={(value) => {
                setdata({ ...data, _status: value });
              }}
              options={[
                { value: "Approved", name: "Approved" },
                { value: "Rejected", name: "Rejected" },
                { value: "Pending", name: "Pending" },
              ]}
              styles={"!max-w-full"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewPartner;

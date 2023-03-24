import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { IconHalder } from "../index";
import { Button as MyButton, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { Generate_contract_Pdf } from "../../Utils/Pdfgenerator";
const DataRow = ({ title, data = null, Render = () => <></> }) => {
  return (
    <tr>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
      >
        {title}
      </th>
      <td className="py-4 px-6">
        {data ? (
          <p className="w-full mb-3 font-light text-gray-500  break-words">
            {" "}
            {data}
          </p>
        ) : (
          <Render />
        )}
      </td>
    </tr>
  );
};

const ClientInfoRender = ({ item }) => {
  return (
    <>
      <div className="overflow-x-auto relative sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50">
                Attribut
              </th>
              <th scope="col" className="py-3 px-6">
                Valeurs
              </th>
            </tr>
          </thead>
          <tbody>
            <DataRow title={"nom complet"} data={item.full_name} />
            <DataRow
              title={"date naissance"}
              data={`${new Date(item.birth_date ).getDate()}/${new Date(
                item.birth_date
              ).getMonth()}/${new Date(
                item.birth_date
              ).getFullYear()}  ${String(
                new Date(item.birth_date).getHours()
              ).padStart(2, "0")}:${String(
                new Date(item.birth_date).getMinutes()
              ).padStart(2, "0")}`}
            />

            <DataRow title={"sexe"} data={item.sexe} />
            <DataRow
              title={"ville"}
              data={item.ville_name}
            />
            <DataRow title={"adresse"} data={item.adresse} />
            <DataRow title={"profession"} data={item.profession} />
            <DataRow
              title={"tel"}
              data={item.tel}
            />
            <DataRow title={"Email"} data={item.email} />
            <DataRow title={"Abonnement"} data={item.abonnement} />
            <DataRow title={"Device ID"} data={item.device_id} />

            <DataRow title={"Statut"} data={item.statut} />
            <DataRow title={"Date inscription"} data= {`${new Date(item.date_inscription).getDate()}/${new Date(
                item.date_inscription
              ).getMonth()}/${new Date(
                item.date_inscription
              ).getFullYear()}  ${String(
                new Date(item.date_inscription).getHours()
              ).padStart(2, "0")}:${String(
                new Date(item.date_inscription).getMinutes()
              ).padStart(2, "0")}`}/>

            <DataRow title={"Date debut abonnement"} data=  {`${new Date(item.date_debut_abonnement).getDate()}/${new Date(
                item.date_debut_abonnement
              ).getMonth()}/${new Date(
                item.date_debut_abonnement
              ).getFullYear()}  ${String(
                new Date(item.date_debut_abonnement).getHours()
              ).padStart(2, "0")}:${String(
                new Date(item.date_debut_abonnement).getMinutes()
              ).padStart(2, "0")}`}/>
            <DataRow title={"Date Fin abonnement"} data={`${new Date(item.date_fin_abonnement).getDate()}/${new Date(
                item.date_fin_abonnement
              ).getMonth()}/${new Date(
                item.date_fin_abonnement
              ).getFullYear()}  ${String(
                new Date(item.date_fin_abonnement).getHours()
              ).padStart(2, "0")}:${String(
                new Date(item.date_fin_abonnement).getMinutes()
              ).padStart(2, "0")}`}/>

            
			</tbody>
        </table>
      </div>
    </>
  );
};
function PartnerInfo({ open, OnClick, data, setRefresh }) {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [loading, setloading] = useState(false);

  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    console.log(data);
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        fullWidth={true}
        onClose={hadlerClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <ClientInfoRender item={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PartnerInfo;

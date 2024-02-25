import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { PrintDate, formatDate } from '../../Utils/Date'

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
              data={formatDate(item.birth_date)}
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
            <DataRow title={"Date inscription"} data={formatDate(item.date_inscription)}
            />
            <DataRow title={"Date debut abonnement"}
              data={formatDate(item.date_debut_abonnement)} />
            <DataRow title={"Date Fin abonnement"}
              data={formatDate(item.date_fin_abonnement)}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};
function PartnerInfo({ open, OnClick, data, setRefresh }) {
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
        <DialogContent>
          <ClientInfoRender item={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PartnerInfo;

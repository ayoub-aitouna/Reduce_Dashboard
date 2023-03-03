import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const DataRow = ({ item, index, onClick = () => { }, OnEdit = () => { } }) => {
  return (
    <tr
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
        } border-b`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.nome_entreprise}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.identificateur_entreprise}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.representant_entreprise}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.role_dans_entriprise}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.activity_name}
      </td>
    </tr>
  );
};

const SubPartnerInfoRender = ({ Data = [] }) => {
  return (
    <>
      <div className="flex flex-col w-full border-[1px] my-10 border-gray-200 rounded-lg ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      nom complet
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      date naissance
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      sexe
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      ville
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      adresse
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      profession
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((item, index) => (
                    <DataRow
                      key={item.id}
                      item={item}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




function SubPartnerInfo({ open, OnClick, id }) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  function load_sub_accounts(id) {

  }
  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    load_sub_accounts(id);
  }, [id]);

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        fullWidth={true}
        maxWidth={false}
        onClose={hadlerClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className="overflow-hidden min-h-[80vh]">
            <SubPartnerInfoRender Data={data} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubPartnerInfo;

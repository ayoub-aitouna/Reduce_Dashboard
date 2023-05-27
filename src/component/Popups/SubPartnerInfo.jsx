import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useCookies } from "react-cookie";
import { BaseUrl, Coockies_name } from "../../constants";
import { PrintDate } from '../../Utils/Date'

const DataRow = ({ item, index }) => {
  return (
    <tr
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
        } border-b`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.sub_partner_Name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item._status}
      </td>
    </tr>
  );
};

const SubPartnerInfoRender = ({ Data = [] }) => {
  return (
    <>
      <div className="flex flex-col w-full border-[1px]  border-gray-200 rounded-lg ">
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
                      email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      _status
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

const HistoryRows = ({ item, index }) => {
  return (
    <tr
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
        } border-b`}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.client_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.product}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        <PrintDate sqlDateTime={item.created_date} />
      </td>
    </tr>
  );
};

const HitoryTable = ({ Data = [] }) => {
  return (
    <>
      <div className="flex flex-col w-full border-[1px]  border-gray-200 rounded-lg ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Client Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Scan Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((item, index) => (
                    <HistoryRows
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
  const [hoistory, sethoistory] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  async function load_sub_accounts(id) {
    try {
      const req = await fetch(`${BaseUrl}/sub_parnter/admin_all_subs/${id}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) setdata(await req.json());
      else
        setdata([{ sub_partner_Name: "No Account is Available Yet!" }]);

    } catch (err) {
      setdata([{ sub_partner_Name: "Error !!" }]);
    }
  }


  async function load_history(id) {
    try {
      const req = await fetch(`${BaseUrl}/partners/Admin_get_history/${id}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok)
        sethoistory(await req.json());
      else
        sethoistory([{ sub_partner_Name: "No Account is Available Yet!" }]);

    } catch (err) {
      sethoistory([{ sub_partner_Name: "Error !!" }]);

    }
  }
  const hadlerClose = () => {
    OnClick();
  };

  useEffect(() => {
    if (!loading) hadlerClose();
  }, [loading]);

  useEffect(() => {
    if (id != undefined) {
      load_sub_accounts(id);
      load_history(id);
    }
  }, [id]);

  useEffect(() => {
    setdata([]);
  }, [open]);

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
          <div className="overflow-hidden min-h-[80vh] flex flex-row gap-5">
            <div className="flex-1 flex-col items-start bg-gray-100 rounded-2xl p-10">
              <h1 className="text-[20px]  font-black  text-center  mb-5 leading-9 text-gray-800">Sub Partners List</h1>
              <SubPartnerInfoRender Data={data} />
            </div>
            <div className="flex-1 bg-gray-100 rounded-2xl p-10 justify-center items-center">
              <h1 className="text-[20px]  font-black text-center leading-9 mb-5 text-gray-800">Visit History</h1>
              <HitoryTable Data={hoistory} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubPartnerInfo;

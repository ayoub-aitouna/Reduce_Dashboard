import React, { useState, useEffect } from "react";


import {
  Filter_Selector,
  SearchBar,
  UpdatePartner,
  PartnerInfo,
  SubPartnerInfo,
  UserTable,
  ClientTable,
  LinearIndeterminate
} from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";


function Statics({ selectedStatus }) {
  let [partner_data, setpartner_data] = useState([]);
  let [clients_data, setclients_data] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  let [loading, setloading] = useState(false);

  const handleRequest = async () => {
    setloading(false);
    try {
      const req = await fetch(`${BaseUrl}/clients/all`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) setclients_data(await req.json());

      const partner_req = await fetch(`${BaseUrl}/admin/get_partners`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (partner_req.ok) {
        const data = await partner_req.json();
        setpartner_data(data);
      }
    } catch (err) { }

    setloading(false);
  };


  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div className="p-5 my-10 h-full">
      <div className="flex flex-col items-center justify-start ">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">Reducte Statiscs</h1>
      </div>
      {
        loading ? <LinearIndeterminate /> :
          <>
            <div className="mt-10  w-full h-[90%] justify-center  items-start gap-5 ">
              <div className="w-[100%] rounded-xl flex flex-col items-start h-[40vh] ">
                <h1 className="text-[15px] font-normal self-start text-gray-800">Recently clinets</h1>
                <div className="flex-1 w-full">
                  <ClientTable
                    Data={clients_data}
                    action={false}
                    my={0}
                  />
                </div>

              </div>
              <div className=" rounded-xl flex flex-col items-start  h-[40vh] w-full">
                <h1 className="text-[15px] font-normal self-start text-gray-800 ">Recently partners</h1>
                <UserTable
                  my="0"
                  action={false}
                  Data={partner_data}
                />
              </div>
            </div>
          </>
      }
    </div>
  );
}

export default Statics;

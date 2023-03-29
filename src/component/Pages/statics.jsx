import React, { useState, useEffect } from "react";
import { SiMicrosoftexcel } from "react-icons/si";


import {
  Filter_Selector,
  SearchBar,
  UpdatePartner,
  PartnerInfo,
  SubPartnerInfo,
  UserTable,
  ClientTable,
  LinearIndeterminate,
  Button as IconButton
} from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";


function Statics({ selectedStatus }) {
  let [partner_data, setpartner_data] = useState([]);
  let [clients_data, setclients_data] = useState([]);
  let [state, setstate] = useState([]);
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

  const handleRequest_state = async () => {
    try {
      const req = await fetch(`${BaseUrl}/State`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) setstate(await req.json());
    } catch (err) { }
  };

  useEffect(() => {
    handleRequest();
    handleRequest_state();
  }, []);

  const Statebanner = ({ title = "", count = 0 }) => {
    return (
      <div className="flex flex-row justify-start items-center  gap-2 ">
        <h1 className="text-[22px] font-bold self-center text-gray-800">{title}</h1>
        <h6 className="text-[18px] font-bold self-center  text-blue-500">{`${count}K`}</h6>
      </div>
    );
  }
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
                <div className="w-full flex flex-row justify-start items-center  gap-10 mb-5 ">
                  <Statebanner title={"Recent clinets : "} count={500} />
                  <Statebanner title={"All clinets : "} count={500} />
                  <IconButton Icon={() => <SiMicrosoftexcel />} title={"Save As Execl"} style={'ml-auto !w-[250px]'} />
                </div>
                <div className="flex-1 w-full overflow-y-scroll overflow-x-hidden">
                  <ClientTable
                    Data={clients_data}
                    action={false}
                    my={0}
                  />
                </div>

              </div>
              <div className=" rounded-xl flex flex-col items-start  h-[40vh] w-full  overflow-y-scroll overflow-x-hidden">
                <div className="w-full flex flex-row justify-start items-center  gap-10 mb-5 ">
                  <Statebanner title={"Recent Partners : "} count={500} />
                  <Statebanner title={"All Partners : "} count={500} />
                  <IconButton Icon={() => <SiMicrosoftexcel />} title={"Save As Execl"} style={'ml-auto !w-[250px]'} />
                </div>
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

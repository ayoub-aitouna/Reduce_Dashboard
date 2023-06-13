import React, { useState, useEffect } from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { writeFile, utils } from 'xlsx';


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
  let [state, setstate] = useState({ client: {}, partner: {} });
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

  const save_as_xlsx = (data, name) => {
    const currentDate = new Date();
    const workbook = utils.book_new();
    const sheet = utils.json_to_sheet(data);
    utils.book_append_sheet(workbook, sheet, 'Sheet1');
    writeFile(workbook, `${name}-data-${currentDate.toDateString()}.xlsx`);
  }

  const Statebanner = ({ title = "", count = 0 }) => {
    if (count == null || count == undefined)
      count = 0;
    return (
      <div className="flex flex-row justify-start items-center  gap-2 ">
        <h1 className="text-[22px] font-bold self-center text-gray-800">{title}</h1>
        <h6 className="text-[18px] font-bold self-center  text-blue-500">{`${count > 1000 ? count / 1000 : count}${count > 1000 ? 'K' : ''}`}</h6>
      </div>
    );
  }
  const ExcelBtn = ({ data , name}) => {
    return cookies.role === "Admin" ?
      <IconButton OnClick={() => save_as_xlsx(data, name)} Icon={() => <SiMicrosoftexcel />} title={"Save As Execl"} style={'ml-auto !w-[250px]'} />
      :
      <></>
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
                  <Statebanner title={"Recent clinets : "} count={state.client.resent_clients} />
                  <Statebanner title={"All clinets : "} count={state.client.total_clients} />
                  <ExcelBtn data={clients_data} name={'clinets'}/>
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
                  <Statebanner title={"Recent Partners : "} count={state.partner.resent_partners} />
                  <Statebanner title={"All Partners : "} count={state.partner.total_partners} />
                  <ExcelBtn data={clients_data} name={'partners'} />
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

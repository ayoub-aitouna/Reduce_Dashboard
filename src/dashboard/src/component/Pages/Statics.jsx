import React, { useState, useEffect } from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import { writeFile, utils } from 'xlsx';


import {
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
  let [Show, setShow] = useState({ clients: true, Partners: true });
  let [state, setstate] = useState({ client: {}, partner: {} });
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  let [loading, setloading] = useState(false);

  const handleRequest = async () => {
    setloading(true);
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
    } catch (err) {
      alert("error loading Users Data");
    }
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
    } catch (err) {
      alert("error loading State Data");
    }
  };
  const GetData = async () => {

    await handleRequest();
    await handleRequest_state();
    setloading(false);
  }
  useEffect(() => {
    GetData();
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
      <div className="flex-1 flex flex-row justify-center items-center  gap-6 ">
        <h1 className="text-[18px] font-bold self-center text-gray-500">{title}</h1>
        <h6 className="text-[18px] font-bold self-center  text-blue-500">{`${count > 1000 ? count / 1000 : count}${count > 1000 ? 'K' : ''}`}</h6>
      </div>
    );
  }


  const ExcelBtn = ({ data, name, style }) => {
    return cookies.role === "Admin" ?
      <IconButton orientation={0} OnClick={() => save_as_xlsx(data, name)} Icon={() => <SiMicrosoftexcel />} title={"télécharger des données"} style={`${style}`} />
      :
      <></>
  }

  const Badge = ({ title, latest, total, data }) => {
    return (<>
      <div className="min-w-[350px] max-w-[50%] max-h-[160px] bg-gray-50 shadow md:shadow-lg flex flex-col justify-center items-center gap-3 p-[20px] rounded-lg">
        <h1 className="text-[25px] font-bold text-gray-800 capitalize">{title}</h1>
        <div className="bg-black w-full h-[1px] opacity-[10%]"></div>
        <div className="flex flex-row w-full">
          <Statebanner title="Derniers: " count={latest} />
          <Statebanner title="Totaux: " count={total} />
        </div>
        <ExcelBtn data={data} name={title} style={'!h-[50px] !text-bold'} />
      </div>
    </>);
  }

  const Expand = ({ title, state, Onclick }) => {
    return (
      <>
        <div className="w-full flex flex-row justify-start items-center  gap-4 mb-5 ">
          <h3 className="text-[22px] font-bold text-gray-800 capitalize">{title}</h3>
          <div className="cursor-pointer" onClick={Onclick}>
            {state ? <FaCaretDown /> : <FaCaretUp />}
          </div>
        </div>
      </>);
  };

  return (
    <div className="px-5 my-0 h-full overflow-hidden">
      {
        loading ? <LinearIndeterminate /> :
          <>
            <div className="mt-5  w-full h-[100%] flex flex-col justify-start  items-start gap-5 ">

              {/* Badges */}
              <div className="w-full flex flex-row justify-around items-center">
                <Badge title={"nos abonné"} latest={state.client.recent_clients} total={state.client.total_clients} data={clients_data} />

                <div className="w-[2px] h-[100px] bg-black opacity-[30%]"></div>

                <Badge title={"nos partenaires"} latest={state.partner.resent_partners} total={state.partner.total_partners} data={partner_data} />
              </div>

              {/* Clients */}
              <div className="w-[100%] rounded-xl flex flex-col items-start  max-h-[50%]">
                <Expand title={"les Abonné"} state={Show.clients} Onclick={() => { setShow({ ...Show, clients: !Show.clients }) }} />
                <div className={`${Show.clients ? ' overflow-y-scroll' : 'h-[0px] overflow-hidden'}  w-full `}>
                  <ClientTable
                    Data={clients_data}
                    action={false}
                    my={0}
                  />
                </div>
              </div>

              <div className="w-full h-[2px] bg-black opacity-[10%]"></div>
              {/* Partner */}
              <div className="rounded-xl flex flex-col items-start max-h-[60vh] w-full">
                <Expand title={"nos partenaires"} state={Show.Partners} Onclick={() => { setShow({ ...Show, Partners: !Show.Partners }) }} />
                <div className={`${Show.Partners ? 'overflow-scroll' : 'h-[0px] overflow-hidden'}  w-full `}>
                  <UserTable
                    my="0"
                    action={false}
                    Data={partner_data}
                  />
                </div>

              </div>
            </div>
          </>
      }
    </div>
  );
}

export default Statics;

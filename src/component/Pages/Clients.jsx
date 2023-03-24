import React, { useState, useEffect } from "react";

import {
  Filter_Selector,
  SearchBar,
  UpdateClients,
  ClientInfo,
  ClientTable,
  Button,
  LinearIndeterminate
} from "../index";
import { BiTask } from "react-icons/bi";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_Activity } from "../../Utils/Activities/Activities";
import { useCookies } from "react-cookie";
import { get_villes } from "../../Utils/villes/get_villes";
import dayjs, { Dayjs } from "dayjs";

function Clients({ selectedStatus }) {
  const [isDialogOpend, setDialogOpend] = useState(true);
  const [City, setCity] = useState("");
  const [Activities, setActivities] = useState([]);
  let [villes, setvilles] = useState([{ value: 0, name: "" }]);

  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const emty_client = {
    full_name: "", birth_date: dayjs().$d.toISOString().slice(0, 19).replace("T", " "), sexe: "", ville: 0,
    adresse: "", profession: 0, tel: "", email: "", abonnement: "",
    statut: "", date_fin_abonnement: ""
  };
  const [SelectedClient, setSelectedClient] = useState(emty_client);
  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [PopUpType, setPopUpType] = useState(false);
  let [Odata, setOdata] = useState([]);
  let [Refresh, setRefresh] = useState(0);
  let [data, setdata] = useState([]);
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
      if (req.ok) setOdata(await req.json());
    } catch (err) { }
    setloading(false);
  };

  useEffect(() => {
    handleRequest();
    get_Activity(setActivities);
    get_villes(setvilles);
  }, [Refresh]);

  useEffect(() => {
    setdata((per) =>
      Search != ""
        ? per.filter((item) =>
          item.name.toLowerCase().includes(Search.toLowerCase())
        )
        : per
    );
    setdata((per) => {
      return City != 0 ? per.filter((item) => item.ville == City) : per;
    });
    setdata(Odata);
  }, [Search, City, Odata]);

  const handle_popup = (data, type) => {
    setSelectedClient(data);
    setPopUpType(type);
    setOpenPopUp(true);
  }

  return (
    <div className="p-5 my-10 ">
      <ClientInfo
        open={isDialogOpend}
        setRefresh={setRefresh}
        OnClick={() => {
          setDialogOpend(false);
        }}
        data={SelectedClient}
      />
      <UpdateClients
        open={OpenPopUp}
        setRefresh={setRefresh}
        is_update={PopUpType}
        OnClick={() => {
          setOpenPopUp(false);
        }}
        Client={SelectedClient}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Reducte Abonné
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Partenaires ayant soumis le formulaire à la plateforme Reducte
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"filter abonnement"}
            styles={"h-[95px]"}
            options={Activities}
            setFilter={(value) => setactivity_entrprise(value)}
            Filter={activity_entrprise}
          />
          <Filter_Selector
            title={"Ville"}
            styles={"h-[95px]"}
            options={villes}
            setFilter={(value) => setCity(value)}
            Filter={City}
          />
          <Filter_Selector
            title={"filter status"}
            styles={"h-[95px]"}
            options={Activities}
            setFilter={(value) => setactivity_entrprise(value)}
            Filter={activity_entrprise}
          />
          <Filter_Selector
            title={"filter date"}
            styles={"h-[95px]"}
            options={Activities}
            setFilter={(value) => setactivity_entrprise(value)}
            Filter={activity_entrprise}
          />
        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
        <Button
          Icon={() => <BiTask />}
          title={"Ajoutez Une Client"}
          OnClick={() => handle_popup(emty_client, false)}
          style={"!w-[250px] text-[15px] shadow-lg capitalize"}
        />
      </div>
      {loading ? <LinearIndeterminate /> : <ClientTable
        Data={data}
        selectedstatu={selectedStatus}
        OnSelect={(data) => {
          setSelectedClient(data);
          setDialogOpend(true);
        }}
        OnEdit={(data) => {
          handle_popup(data, true);
        }}
      />}
    </div>
  );
}

export default Clients;

import React, { useState, useEffect } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
import { Filter_Selector, SearchBar } from "./index";
import { BaseUrl, Coockies_name } from "../constants";
import { get_Activity } from "../Utils/Activities/Activities";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { get_villes } from "../Utils/villes/get_villes";

function Partner({ selectedStatus }) {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [City, setCity] = useState("");
  const [Activities, setActivities] = useState([]);
  let [villes, setvilles] = useState([{ value: 0, name: "" }]);

  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [Search, setSearch] = useState("");
  const [AccountState, setAccountState] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [SelectedPartner, setSelectedpartner] = useState({});
  let [Odata, setOdata] = useState([]);
  let [data, setdata] = useState([]);
  const handleRequest = async () => {
    try {
      const req = await fetch(`${BaseUrl}/admin/get_partners`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) {
        const data = await req.json();
        console.log(data);
        setOdata(data);
      } else {
      }
    } catch (err) {}
  };
  useEffect(() => {
    handleRequest();
    get_Activity(setActivities);
    get_villes(setvilles);
  }, []);
  useEffect(() => {
    setdata(
      selectedStatus != ""
        ? Odata.filter((item) => item._status == selectedStatus)
        : Odata
    );
    setdata((per) =>
      Search != ""
        ? per.filter((item) =>
            item.nome_entreprise.toLowerCase().includes(Search.toLowerCase())
          )
        : per
    );
    setdata((per) =>
      City != 0 ? per.filter((item) => item.ville == City) : per
    );
    setdata((per) =>
      activity_entrprise != 0
        ? per.filter((item) => item.activity_entrprise == activity_entrprise)
        : per
    );
  }, [Search, selectedStatus, City]);

  return (
    <div className="p-5 my-10">
      <PartnerInfo
        open={isDialogOpend}
        OnClick={() => {
          setDialogOpend(false);
        }}
        data={SelectedPartner}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Reduce Partners
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          partners that submited form to reduce platform
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"Activity Entrprise"}
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
        </div>
      </div>
      <UserTable
        Data={data}
        selectedstatu={selectedStatus}
        OnSelect={(data) => {
          setSelectedpartner(data);
          setDialogOpend(true);
        }}
      />
    </div>
  );
}

export default Partner;

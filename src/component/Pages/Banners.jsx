import React, { useState, useEffect } from "react";

import {
  Button,
  SearchBar,
  BannerTable,
  Banner_Dialog
} from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_Activity } from "../../Utils/Activities/Activities";
import { useCookies } from "react-cookie";
import { get_villes } from "../../Utils/villes/get_villes";
import { BiTask } from "react-icons/bi";
import dayjs from "dayjs";

function Banners() {
  const [isDialogOpend, setDialogOpend] = useState(true);
  const [isUpdateDialogOpend, setUpdateDialogOpend] = useState(false);
  const [City, setCity] = useState("");
  const [Activities, setActivities] = useState([]);
  let [villes, setvilles] = useState([{ value: 0, name: "" }]);
  const emty_banner = {
    Baniere_ordre: 0, Logo: "",
    Couverture: "", Offer: 0, Adresse: "", Tel: "", statut: ""
  };
  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [SlectedBanner, setSlectedBanner] = useState({});
  let [Odata, setOdata] = useState([]);
  let [Refresh, setRefresh] = useState(0);
  let [data, setdata] = useState([]);
  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [PopUpType, setPopUpType] = useState(false);

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
      if (req.ok) setOdata(await req.json());
    } catch (err) { }
  };

  const handle_popup = (data, type) => {
    setSlectedBanner(data);
    setPopUpType(type);
    setOpenPopUp(true);
  }

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
      console.log(City);
      return City != 0 ? per.filter((item) => item.ville == City) : per;
    });
    setdata(Odata);
  }, [Search, City, Odata]);

  return (
    <div className="p-5 my-10 ">
      <Banner_Dialog
        open={OpenPopUp}
        setRefresh={setRefresh}
        OnClick={() => {
          setOpenPopUp(false);
        }}
        data={SlectedBanner}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Reducte Banners
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Partenaires ayant soumis le formulaire à la plateforme Reducte
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
      </div>
      <div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
        <Button
          Icon={() => <BiTask />}
          title={"Ajoutez Une Banner"}
          OnClick={() => handle_popup(emty_banner, false)}
          style={"!w-[250px] text-[15px] shadow-lg capitalize"}
        />
      </div>
      <BannerTable
        Data={data}
        OnEdit={(data) => {
          handle_popup(data, true);
        }}
      />
    </div>
  );
}

export default Banners;

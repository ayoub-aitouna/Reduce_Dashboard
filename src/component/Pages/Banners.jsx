import React, { useState, useEffect } from "react";

import {
  Button,
  SearchBar,
  BannerTable,
  LinearIndeterminate,
  Filter_Selector,
  Banner_Dialog
} from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { BiTask } from "react-icons/bi";

function Banners() {
  const emty_banner = {
    Baniere_ordre: 0, Logo: "",
    Couverture: "", Offer: "", Adresse: "", Tel: "", statut: ""
  };
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [SlectedBanner, setSlectedBanner] = useState(emty_banner);
  let [Odata, setOdata] = useState([]);
  let [Refresh, setRefresh] = useState(0);
  let [data, setdata] = useState([]);
  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [PopUpType, setPopUpType] = useState(false);
  let [loading, setloading] = useState(false);
  let [status, setstatus] = useState(1);

  const handleRequest = async () => {
    setloading(true);
    try {
      let type = status != 0 ? `?type=${status}` : '';
      const req = await fetch(`${BaseUrl}/banners${type}`, {
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
        setOdata(await req.json());

    } catch (err) { }
    setloading(false);
  };

  const handle_popup = (data, type) => {
    setSlectedBanner(data);
    setPopUpType(type);
    setOpenPopUp(true);
  }

  useEffect(() => {
    setdata(Odata);
  }, [Odata]);

  useEffect(() => {
    handleRequest();
  }, [Refresh, status]);

  useEffect(() => {
    setdata((per) =>
      Search != ""
        ? per.filter((item) =>
          item.Offer.toLowerCase().includes(Search.toLowerCase()) ||
          item.Adresse.toLowerCase().includes(Search.toLowerCase())
        )
        : per
    );
    if (Search == "")
      setdata(Odata);
  }, [Search, Odata]);


  return (
    <div className="p-5 my-10 ">
      <Banner_Dialog
        open={OpenPopUp}
        setRefresh={setRefresh}
        update={PopUpType}
        selected={SlectedBanner}
        OnClick={() => {
          setOpenPopUp(false);
        }}
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
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"filter abonnement"}
            styles={"h-[95px]"}
            options={[{ value: 0, name: '' },
              { value: 1, name: 'Activer' },
              { value: 2, name: 'desctiver' }]}
            setFilter={(value) => setstatus(value)}
            Filter={status}
          />

        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
        <Button
          Icon={() => <BiTask />}
          title={"Ajoutez Une Banner"}
          OnClick={() => handle_popup(emty_banner, false)}
          style={"!w-[250px] text-[15px] shadow-lg capitalize"}
        />
      </div>
      {loading
        ?
        <LinearIndeterminate />
        :
        <BannerTable
          Data={data}
          OnEdit={(data) => {
            handle_popup(data, data);
          }}
        />}
    </div>
  );
}

export default Banners;

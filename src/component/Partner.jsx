import { selectClasses } from "@mui/material";
import React, { useState } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
import { Filter_Selector, SearchBar } from "./index";
function Partner({ selectedStatus = "" }) {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [City, setCity] = useState("");
  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [AccountState, setAccountState] = useState("");

  const [SelectedPartner, setSelectedpartner] = useState({});
  let data = [
    {
      id: 1,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Pending",
    },
    {
      id: 2,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 3,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Acepted",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
    {
      id: 4,
      avatar_Url:
        "https://e7.pngegg.com/pngimages/571/691/png-clipart-chanel-logo-brand-fashion-coco-company-text.png",
      nome_entreprise: "Chanel",
      identificateur_entreprise: "XF-548CCF",
      representant_entreprise: "CEO MAARY",
      role_dans_entriprise: "Cloths",
      ville_nome: "Parize",
      activity_entrprise_nome: "Design cloth",
      status: "Rejected",
    },
  ];
  data = data.filter(function (v, i) {
    return v["activity_entrprise_nome"] == activity_entrprise ||
      (v["City"] == City && selectedStatus != "")
      ? v.status == selectedStatus
      : v;
  });
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
        <SearchBar styles={"max-h-[15px] !w-full"} />
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"Activity Entrprise"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Designer" },
              { value: 2, name: "Programmer" },
              { value: 2, name: "Cleaner" },
            ]}
            setFilter={(value) => setactivity_entrprise(value)}
            Filter={activity_entrprise}
          />
          <Filter_Selector
            title={"Account State"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Pending" },
              { value: 2, name: "Rejected" },
              { value: 2, name: "Acepted" },
            ]}
            setFilter={(value) => setAccountState(value)}
            Filter={AccountState}
          />
          <Filter_Selector
            title={"Ville"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Marrakech" },
              { value: 2, name: "Beni Mellal" },
            ]}
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

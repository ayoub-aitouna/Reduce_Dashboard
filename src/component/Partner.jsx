import { selectClasses } from "@mui/material";
import React, { useState } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
import { Filter_Selector, SearchBar } from "./index";
function Partner({ selectedStatus = "" }) {
  const [isDialogOpend, setDialogOpend] = useState(false);

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
  data = data.filter((item) =>
    selectedStatus != "" ? item.status == selectedStatus : item.status
  );
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
      <div className="flex flex-row w-full mt-10 gap-5 justify-center items-center">
        <Filter_Selector
          title={"Role"}
          styles={"h-[95px]"}
          options={[
            { value: 0, name: "" },
            { value: 1, name: "Admin" },
            { value: 2, name: "Manager" },
          ]}
        />
        <Filter_Selector
          title={"Account State"}
          styles={"h-[95px]"}
          options={[
            { value: 0, name: "" },
            { value: 1, name: "Suspanded" },
            { value: 2, name: "Active" },
            { value: 2, name: "Banned" },
          ]}
        />
        <Filter_Selector
          title={"Ville"}
          styles={"h-[95px]"}
          options={[
            { value: 0, name: "" },
            { value: 1, name: "Marrakech" },
            { value: 2, name: "Beni Mellal" },
          ]}
        />
        <SearchBar styles={"max-h-[95px]"} />
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

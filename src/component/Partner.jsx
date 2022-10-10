import React, { useState } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
function Partner() {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [SelectedPartner, setSelectedpartner] = useState({});
  const data = [
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
  const ToggleDialog = () => {
    setDialogOpend((value) => !value);
  };

  return (
    <div className="p-5 my-10">
      <PartnerInfo
        open={isDialogOpend}
        data={SelectedPartner}
        handleClose={ToggleDialog()}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Reduce Partners
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          partners that submited form to reduce platform
        </p>
      </div>
      <UserTable
        Data={data}
        OnSelect={(data) => {
          setSelectedpartner(data);
        }}
      />
    </div>
  );
}

export default Partner;

import React from "react";
import { UserTable } from "./index";
function Partner() {
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
  ];
  return (
    <div>
      <div className=""></div>
      <UserTable Data={data} />
    </div>
  );
}

export default Partner;

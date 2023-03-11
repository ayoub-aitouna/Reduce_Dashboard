import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { MdPendingActions, MdGroups } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export const SideBarLinks = [
  {
    key: 0,
    groupName: "GÉNÉRAL",
    tabs: [
      {
        key: 0,
        name: "Statistiques",
        Icon: AiFillHome,
        Url: "Statistics",
      },
      {
        name: "les Abonné",
        Url: "subscribers",
        Icon: MdGroups,
        key: 0,
      },
      {
        name: "les partenaires",
        Url: "",
        Icon: HiUsers,
        key: 1,
      }
    ],
  },
  {
    key: 1,
    groupName: "Gestionnaire",
    tabs: [
      {
        key: 0,
        name: "Tâches",
        Icon: FaTasks,
        Url: "tasks",
      },
      {
        key: 1,
        name: "Gestionnaire Banniere",
        Icon: RiAdminFill,
        Url: "gestionnaire_banniere",
      },
      {
        key: 2,
        name: "Historique des modifications",
        Icon: BsClockHistory,
        Url: "edit_history",
      },
      {
        key: 3,
        name: "Réglages",
        Icon: IoSettings,
        Url: "settings",
      },
    ],
  },
  {
    key: 2,
    groupName: "ADMINISTRATEUR",
    tabs: [
      {
        key: 0,
        name: "Gestionnaire Super Admin",
        Icon: RiAdminFill,
        Url: "Admin_managers",
      },
    ],
  },
];

export const BaseUrl = "https://merybtk.xyz/api/v1";

export const Coockies_name = "auth_name";

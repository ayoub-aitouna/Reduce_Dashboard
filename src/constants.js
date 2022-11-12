import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill, BsClockHistory } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";

export const SideBarLinks = [
  {
    key: 0,
    groupName: "PARTENAIRES",
    tabs: [
      {
        name: "Tous les partenaires",
        Url: "",
        Icon: HiUsers,
        key: 0,
      },

      {
        name: "Partenaires en attente",
        Url: "Pending_partners",
        Icon: MdPendingActions,
        key: 2,
      },
      {
        name: "Partenaires approuvés",
        Url: "Approved_partners",
        Icon: BsCheckCircleFill,
        key: 4,
      },
      {
        name: "Partenaires refusés",
        Url: "Rejected_partners",
        Icon: IoIosCloseCircle,
        key: 3,
      },
      {
        key: 1,
        name: "Tâches",
        Icon: FaTasks,
        Url: "tasks",
      },
      {
        key: 1,
        name: "Historique des modifications",
        Icon: BsClockHistory,
        Url: "edit_history",
      },
    ],
  },
  {
    key: 1,
    groupName: "ADMINISTRATEUR",
    tabs: [
      {
        key: 0,
        name: "Responsables",
        Icon: RiAdminFill,
        Url: "Admin_managers",
      },
    ],
  },
];

export const BaseUrl = "http://localhost:5000/api/v1";

export const Coockies_name = "auth_name";

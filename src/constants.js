import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

export const SideBarLinks = [
	{
		key: 0,
		groupName: "PARTNERS",
		tabs: [
			{
				name: "All Partners",
				Url: "/all_partners",
				Icon: HiUsers,
				key: 0,
			},
			{
				name: "Rejected Partners",
				Url: "/Rejected_partners",
				Icon: IoIosCloseCircle,
				key: 1,
			},
			{
				name: "Approved Partners",
				Url: "/Approved_partners",
				Icon: BsCheckCircleFill,
				key: 2,
			},
		],
	},
	{
		key: 1,
		groupName: "ADMIN",
		tabs: [
			{
				key: 0,
				name: "Managers",
				Icon: RiAdminFill,
				Url: "/Admin_managers",
			},
		],
	},
];

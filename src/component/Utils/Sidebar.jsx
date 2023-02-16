import React, { useEffect, useState } from "react";
import { BiExit } from "react-icons/bi";
import { Button } from "../index";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Coockies_name, SideBarLinks } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../assets";

function Sidebar() {
	const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
	const [links, setLinks] = useState(SideBarLinks);
	useEffect(() => {
		setLinks((per) =>
			per.filter((item) =>
				cookies.role == "Admin"
					? item.groupName
					: item.groupName != "ADMINISTRATEUR"
			)
		);
	}, []);

	let navigate = useNavigate();
	return (
		<div className="absolute w-[289.19px] h-[100vh] top-0 left-0 bg-[#fff] pt-[20px] px-10 flex flex-col py-10 shadow-lg">
			<div className="flex flex-col text-[#2E5CFF] text-4xl font-black gap-2 justify-start items-start pb-9">
				<img src={Icon} alt="" srcset="" className="w-[150px] object-cover" />
				<h1 className="text-xl ">{cookies.name}</h1>
			</div>
			<ul className="flex flex-col gap-8 justify-center items-start w-full">
				{links.map((item) => (
					<>
						<li
							key={item.key}
							className=" flex flex-col justify-start items-start gap-[10px]"
						>
							<h3 className="text-[16px] leading-[20px] font-bold pb-[10px]">
								{item.groupName}
							</h3>
							<ul className="flex flex-col gap-3 w-full">
								{item.tabs.map((tab) => (
									<>
										{tab.Url == "tasks" ? (
											<NavLink
												to={tab.Url}
												key={tab.key}
												style={({ isActive }) => ({
													color: isActive ? "#fff" : "#545e6f",
													background: isActive ? "#2E5CFF" : "#f0f0f0",
												})}
												className="flex w-[200px] flex-col justify-center items-start  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white"
											>
												<p className="leading-[20px] font-semibold text-[14px] flex flex-row justify-center items-center gap-3">
													<tab.Icon />
													{tab.name}
												</p>
											</NavLink>
										) : (
											<NavLink
												to={tab.Url}
												key={tab.key}
												end
												style={({ isActive }) => ({
													color: isActive ? "#fff" : "#545e6f",
													background: isActive ? "#2E5CFF" : "#f0f0f0",
												})}
												className=" flex w-[200px] flex-col justify-center items-start  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white"
											>
												<p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
													<tab.Icon />
													{tab.name}
												</p>
											</NavLink>
										)}
									</>
								))}
							</ul>
						</li>
					</>
				))}
			</ul>
			<Button
				title={"Se déconnecter"}
				Icon={() => <BiExit />}
				OnClick={() => {
					removeCookie("role");
					removeCookie("accesToken");
					removeCookie("name");
					navigate("/");
					window.location.reload(false);
				}}
				style="!h-[30px] p-[28px]  mt-auto"
			/>
		</div>
	);
}

export default Sidebar;

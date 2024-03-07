
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";

import {
	FilterSelector,
	SearchBar,
	UpdatePartner,
	PartnerInfo,
	SubPartnerInfo,
	UserTable,
	NewPartner,
	Button,
	LinearIndeterminate
} from "../index";
import { BiTask } from "react-icons/bi";

import { BaseUrl, Coockies_name } from "../../constants";
import { get_Activity } from "../../Utils/Activities/Activities";
import { useCookies } from "react-cookie";
import { get_villes } from "../../Utils/villes/get_villes";

function Partner() {
	const [isDialogOpend, setDialogOpend] = useState(false);
	const [issubDialogOpend, setsubDialogOpend] = useState(false);
	const [isUpdateDialogOpend, setUpdateDialogOpend] = useState(false);
	const [isNewDialogOpend, setNewDialogOpend] = useState(false);

	let [loading, setloading] = useState(false);
	let [Odata, setOdata] = useState([]);
	let [Refresh, setRefresh] = useState(0);
	let [data, setdata] = useState([]);

	const [Activities, setActivities] = useState([]);
	const [City, setCity] = useState("");
	let [villes, setvilles] = useState([{ value: 0, name: "" }]);

	const [activity_entrprise, setactivity_entrprise] = useState("");
	const [selectedStatus, setselectedStatus] = useState("");
	const [Search, setSearch] = useState("");
	const [cookies] = useCookies([Coockies_name]);
	const [SelectedPartner, setSelectedpartner] = useState({});

	const handleRequest = async () => {
		setloading(true);
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
		if (req.ok)
			setOdata(await req.json());
		setloading(false);
	};

	useEffect(() => {
		handleRequest();
		get_Activity(setActivities);
		get_villes(setvilles);
	}, [Refresh]);

	useEffect(() => {
		setdata(
			selectedStatus != ""
				? Odata.filter((item) => item._status == selectedStatus)
				: Odata
		);
		setdata((per) =>
			Search != ""
				? per.filter((item) =>
					item.nome_entreprise.toLowerCase().includes(Search.toLowerCase())
				)
				: per
		);
		setdata((per) => {
			return City != 0 ? per.filter((item) => item.ville == City) : per;
		});
		setdata((per) =>
			activity_entrprise != 0
				? per.filter((item) => item.activity_entrprise == activity_entrprise)
				: per
		);
	}, [Search, selectedStatus, City, Odata, activity_entrprise]);

	return (
		<div className="px-5">
			<SubPartnerInfo
				open={issubDialogOpend}
				setRefresh={setRefresh}
				OnClick={() => {
					setsubDialogOpend(false);
				}}
				id={SelectedPartner.id}
			/>
			<PartnerInfo
				open={isDialogOpend}
				setRefresh={setRefresh}
				OnClick={() => {
					setDialogOpend(false);
				}}
				data={SelectedPartner}
			/>

			<UpdatePartner
				open={isUpdateDialogOpend}
				setRefresh={setRefresh}
				OnClick={() => {
					setUpdateDialogOpend(false);
				}}
				partner={SelectedPartner}
			/>

			<NewPartner
				open={isNewDialogOpend}
				setRefresh={setRefresh}
				OnClick={() => {
					setNewDialogOpend(false);
				}}
			/>

			<div className="flex flex-col items-start justify-start ">
				<h1 className="text-[20px] font-black leading-9 text-gray-800">
					Reducte nos partenaires
				</h1>
				<p className="text-[16px] font-normal  leading-9 text-gray-500">
					nos partenaires ayant soumis le formulaire à la plateforme Reducte
				</p>
			</div>
			<div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
				<SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
				<div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
					<FilterSelector
						title={"Secteur d'activité"}
						styles={"h-[95px]"}
						options={Activities}
						setFilter={(value) => setactivity_entrprise(value)}
						Filter={activity_entrprise}
					/>
					<FilterSelector
						title={"Ville"}
						styles={"h-[95px]"}
						options={villes}
						setFilter={(value) => setCity(value)}
						Filter={City}
					/>

					<FilterSelector
						title={"status"}
						styles={"h-[95px]"}
						options={[{ value: "", name: "Tout" }, { value: "Approved", name: "Accepted" }, { value: "Pending", name: "Pending" }, { value: "Rejected", name: "Rejected" }]}
						setFilter={(value) => setselectedStatus(value)}
						Filter={selectedStatus}
					/>
				</div>
			</div>

			<div className="">
				{
					loading ? <LinearIndeterminate /> :
						<div className="overflow-scroll max-h-[57vh]">
							<UserTable
								Data={data}
								action={true}
								my="0"
								selectedstatu={selectedStatus}
								OnSelect={(data) => {
									setSelectedpartner(data);
									setDialogOpend(true);
								}}
								onRowSelected={(data) => {
									setSelectedpartner(data);
									setsubDialogOpend(true);
								}}
								OnEdit={(data) => {
									setSelectedpartner(data);
									setUpdateDialogOpend(true);
								}}
							/>
						</div>


				}
			</div>
			<div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
				<Button
					Icon={() => <BiTask />}
					title={"Ajouter Un Partenaire"}
					OnClick={() => setNewDialogOpend(true)}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
			</div>

		</div>
	);
}

export default Partner;

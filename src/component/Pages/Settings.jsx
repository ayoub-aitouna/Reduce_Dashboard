
import React, { useState, useEffect } from "react";
import {
	Cities_table,
	Activities_table,
	Button,
	NewActivity,
	AddNewCity,
	Profession_table,
	EditeActivity, AddProffesion,
	LinearIndeterminate
} from "../index";
import { BiTask } from "react-icons/bi";
import { get_villes } from "../../Utils/villes/get_villes";
import { get_Activity } from "../../Utils/Activities/Activities";
import { get_profesion } from "../../Utils/profesion/Profesion";
import { BaseUrl } from "../../constants"

function Settings() {
	const [villes, setvilles] = useState([]);
	const [profession, setprofession] = useState([]);
	const [newcity, setnewcity] = useState(false);
	const [Refresh, setRefresh] = useState(0);
	const [newactivity, setnewactivity] = useState(false);
	const [newproffesion, setnewproffesion] = useState(false);
	const [editeActivity, setediteActivity] = useState(false);
	const [Activity, setActivity] = useState({});
	const [activities, setactivities] = useState([]);

	async function handle_city_change(city) {
		const { status, value } = city;
		await fetch(`${BaseUrl}/Ville/change_status`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
			},
			referrerPolicy: "no-referrer",
			body: JSON.stringify({ status: status, id: value })
		});

	}

	useEffect(() => {
		get_profesion(setprofession);
		get_villes(setvilles);
		get_Activity(setactivities)
	}, [Refresh])

	const handleOpenEditeActivity = (seleced_activity) => {
		setActivity(seleced_activity);
		setediteActivity(true);
	}

	if ((villes !== undefined && villes.length === 0) || (activities !== undefined && activities.length == 0))
		return <LinearIndeterminate />
	return (
		<div className="p-5 my-10 ">
			<AddProffesion
				open={newproffesion}
				setRefresh={setRefresh}
				OnClick={() => {
					setnewproffesion(false);
				}}
			/>
			<NewActivity
				open={newactivity}
				setRefresh={setRefresh}
				OnClick={() => {
					setnewactivity(false);
				}}
			/>
			<AddNewCity
				open={newcity}
				setRefresh={setRefresh}
				OnClick={() => {
					setnewcity(false);
				}}
			/>
			<EditeActivity
				open={editeActivity}
				setRefresh={setRefresh}
				activity={Activity}
				OnClick={() => {
					setediteActivity(false);
				}}
			/>
			<div className="flex flex-col ">
				<div className="p-5 my-10 flex flex-row justify-between gap-6 max-h-[50vh] overflow-y-scroll overflow-x-hidden" >
					<div className="flex-1 max-h-[30vh]">
						<div className="flex flex-col items-start justify-start">
							<h6 className="text-[15px] font-bold text-gray-800">
								Reducte Villes
							</h6>
						</div>
						<Cities_table
							Data={villes}
							OnEdit={(data) => {
								handle_city_change(data)
							}}
						/>
					</div>
					<div className="flex-1">
						<div className="flex flex-col items-start justify-start">
							<h6 className="text-[15px] font-bold text-gray-800">
								Reducte Activities asd
							</h6>
						</div>
						<Activities_table
							Data={activities}
							OnEdit={(item) => {
								console.log(item);
								handleOpenEditeActivity(item);
							}}
						/>
					</div>
				</div>
				<div className="flex-1 max-h-[30vh]">
					<div className="flex flex-col items-start justify-start">
						<h6 className="text-[15px] font-bold text-gray-800">
							Reducte Villes
						</h6>
					</div>
					<Profession_table
						Data={profession}
						OnEdit={(data) => {

						}}
					/>
				</div>
			</div>

			<div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
				<Button
					Icon={() => <BiTask />}
					title={"Ajoutez Une Ville"}
					OnClick={() => { setnewcity(true); }}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
				<Button
					Icon={() => <BiTask />}
					title={"Ajoutez Une Activity"}
					OnClick={() => setnewactivity(true)}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
				<Button
					Icon={() => <BiTask />}
					title={"Ajoutez Une Profession"}
					OnClick={() => setnewproffesion(true)}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
			</div>

		</div>
	);
}

export default Settings;

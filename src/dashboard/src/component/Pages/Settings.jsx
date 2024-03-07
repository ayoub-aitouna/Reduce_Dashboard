
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

	async function load_all_cities(city) {
		setvilles([]);
		try {
			const req = await fetch(`${BaseUrl}/Ville/All_Villes`, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				referrerPolicy: "no-referrer",
			});
			if (req.ok) {
				const data = await req.json();
				data.map((item) => {
					setvilles((v) => [...v, { value: item.id, name: item.ville_name, status: item.status }]);
				});
			} else {
			}
		} catch (err) { }
	}

	useEffect(() => {
		get_profesion(setprofession);
		load_all_cities();
		get_Activity(setactivities)
	}, [Refresh])

	const handleOpenEditeActivity = (seleced_activity) => {
		setActivity(seleced_activity);
		setediteActivity(true);
	}

	const handleDeleteActivity = async (seleced_activity) => {
		if (!window.confirm(`Êtes-Vous Sûr De Vouloir Supprimer Cette Activité : ${seleced_activity.name}`))
			return;
		try {
			await fetch(`${BaseUrl}/Activities/${seleced_activity.value}`, {
				method: "DELETE",
				mode: "cors",
				cache: "no-cache",
				headers: { "Content-Type": "application/json" },
				referrerPolicy: "no-referrer"
			});
			//reload activities
			get_Activity(setactivities)
		} catch (err) {
			window.alert("Error: " + err);
		} finally {

		}

	}

	const handleDeleteProfesion = async (seleced_profesion) => {
		if (!window.confirm(`Êtes-Vous Sûr De Vouloir Supprimer Cette Profession : ${seleced_profesion.name}`))
			return;
		try {
			await fetch(`${BaseUrl}/profession/${seleced_profesion.value}`, {
				method: "DELETE",
				mode: "cors",
				cache: "no-cache",
				referrerPolicy: "no-referrer"
			});
			//reload profesions
			get_profesion(setprofession);
		} catch (err) {
			window.alert("Error: " + err);
		} finally {

		}
	}

	if ((villes !== undefined && villes.length === 0) || (activities !== undefined && activities.length == 0))
		return <LinearIndeterminate />
	return (
		<div className="pt-2 px-5">
			<div className="PopUps">
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
			</div>

			<div className="flex flex-col gap-5 ">
				<div className="my-0  max-h-[45vh] flex flex-row justify-between gap-6 overflow-hidden" >
					<div className="py-2 flex-1  overflow-hidden">
						<div className="flex flex-col items-center justify-center">
							<h6 className="text-[22px] font-bold text-white bg-blue-500 w-full text-center p-2 rounded-lg">
								Liste Des Villes
							</h6>
						</div>
						<div className="w-full h-[90%] overflow-y-scroll overflow-x-hidden">
							<Cities_table
								my="0"
								Data={villes}
								OnEdit={(data) => {
									handle_city_change(data)
								}}
							/>
						</div>

					</div>

					<div className="w-[2px] bg-black h-[30vh] self-center opacity-[50%]"></div>

					<div className="py-2  flex-1 overflow-hidden">
						<div className="flex flex-col items-center justify-center">
							<h6 className="text-[22px] font-bold text-white bg-blue-500 w-full text-center p-2 rounded-lg">
								Liste Des Secteurs D'activités
							</h6>
						</div>

						<div className="w-full h-[90%] overflow-y-scroll overflow-x-hidden">
							<Activities_table
								Data={activities}
								my="0"
								OnEdit={(item) => {
									handleOpenEditeActivity(item);
								}}
								OnDelete={(item) => {
									handleDeleteActivity(item);
								}}

							/>
						</div>

					</div>
				</div>
				<div className="w-full bg-black h-[2px] opacity-[50%]"></div>
				<div className="flex-1 ">
					<div className="flex flex-col items-center justify-center overflow-hidden">
						<h6 className="text-[22px] font-bold text-white bg-blue-500 w-full text-center p-2 rounded-lg">
							Liste Des Métiers
						</h6>
					</div>
					<div className="w-full max-h-[30vh] overflow-y-scroll overflow-x-hidden pb-5">
						<Profession_table
							my='0'
							Data={profession}
							OnDelete={(data) => handleDeleteProfesion(data)}
						/>
					</div>

				</div>
			</div>

			<div className="absolute bottom-4 bg-[#09090924] p-3 rounded-lg left-[20%] right-12 flex flex-row  justify-around gap-5 capitalize z-50">
				<Button
					Icon={() => <BiTask />}
					title={"Ajoutez Une Ville"}
					OnClick={() => { setnewcity(true); }}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
				<Button
					Icon={() => <BiTask />}
					title={"Ajouter Une Activité"}
					OnClick={() => setnewactivity(true)}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
				<Button
					Icon={() => <BiTask />}
					title={"Ajouter Une Profession"}
					OnClick={() => setnewproffesion(true)}
					style={"!w-[250px] text-[15px] shadow-lg capitalize"}
				/>
			</div>

		</div>
	);
}

export default Settings;

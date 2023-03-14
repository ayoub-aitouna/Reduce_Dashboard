import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IconHalder, Edite_Task } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { LinearIndeterminate } from "../index";
import { useCookies } from "react-cookie";

const Task_done = ({ Ref }) => {
	let [data, setdata] = useState([]);
	let [isEdite_Task_Dialog_Opend, setEdite_Task_Dialog_Opend] = useState(false);
	let [refrech, setrefrech] = useState(0);

	const [SelectedTask, setSelectedTask] = useState({});
	const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
	let [loading, setloading] = useState(false);

	const handleRequest = async () => {
		const req = await fetch(`${BaseUrl}/Tasks/done`, {
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
			setdata(await req.json());
		setloading(false);
	};

	useEffect(() => {
		handleRequest();
	}, [refrech]);

	useEffect(() => {
		setrefrech((val) => val + 1);
	}, [Ref]);

	if (loading) return <LinearIndeterminate />
	return (
		<div className="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
			<Edite_Task
				setRef={setrefrech}
				open={isEdite_Task_Dialog_Opend}
				setSelectedTask={setSelectedTask}
				OnClick={() => {
					setEdite_Task_Dialog_Opend(false);
				}}
				SelectedTask={SelectedTask}
			/>
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="bg-white border-b">
								<tr>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										#
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Partenaire
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Nom et Prenom
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Tele
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Note
									</th>

									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Visite Date
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										statut
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Manager
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										ville
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Modifier
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, index) => (
									<DataRow
										key={item.id}
										item={item}
										index={index}
										onClick={() => {
											setSelectedTask(item);
											setEdite_Task_Dialog_Opend(true);
										}}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};


const DataRow = ({ item, index, onClick = () => { } }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.id}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.partner_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.partner_full_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.phone_number}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.note}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{`${new Date(item.data_of_visite).getDate()}/${new Date(
					item.data_of_visite
				).getMonth()}/${new Date(item.data_of_visite).getFullYear()}`}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.partner_status == "intrested"
					? "Intéressé"
					: item.partner_status == "not_intrested"
						? "Pas intéressé"
						: "En cours"}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item._name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.ville_name}
			</td>
			<td
				className="px-6 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => {
					const { id, partner_name, partner_status } = item;
					onClick();
				}}
			>
				<IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
			</td>
		</tr>
	);
};

export default Task_done;

import React, { useState, useEffect } from "react";
import { AiOutlineFileDone } from "react-icons/ai";

import { IconHalder, SetAsDone } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";

import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

// Data Row
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
				"En cours"
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.ville_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.adrress}
			</td>
			<td
				className="px-6 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => {
					onClick(item);
				}}
			>
				<IconHalder Icon={() => <AiOutlineFileDone />} style="text-[20px]" />
			</td>
		</tr>
	);
};

const Task_anounsments = () => {
	let [data, setdata] = useState([]);
	let [refrech, setrefrech] = useState(0);
	const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
	const [isDialogOpend, setDialogOpend] = useState(false);
	const [SelectedTask, setSelectedTask] = useState({
		id: 1,
		partner_name: "",
		partner_status: "",
		note: "",
		full_name: "",
		phone_number: "",
		visite_date: "",
		adrress: "",
	});

	const handleRequest = async () => {
		try {
			const req = await fetch(`${BaseUrl}/Tasks/announcement`, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${cookies.accesToken}`,
				},
				referrerPolicy: "no-referrer",
			});
			if (req.ok) {
				const data = await req.json();
				console.trace(data);
				setdata(data);
			}
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		handleRequest();
	}, [refrech]);

	data = data.filter((v) => v.task_status == "Pending");
	return (
		<div className="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
			<SetAsDone
				setrefrech={setrefrech}
				open={isDialogOpend}
				OnClick={() => {
					setDialogOpend(false);
				}}
				item={SelectedTask}
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
										Satut
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Ville
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Adresse
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Résultat
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, index) => (
									<DataRow
										key={item.id}
										item={item}
										index={index}
										onClick={(selected) => {
											setDialogOpend(true);
											setSelectedTask(selected);
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

export default Task_anounsments;

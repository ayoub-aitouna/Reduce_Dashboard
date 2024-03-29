/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "../index";
const filter = (value) => {
	if (value == "undefined") return ("informations non disponibles");
	return value;
}
const DataRow = ({ item, index, onClick = () => { }, OnEdit = () => { }, onRowSelected = () => { }, action }) => {
	return (
		<tr
			onClick={() => onRowSelected()}
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.id}
			</td>
			<td className="px-4 py-4 whitespace-nowrap text-sm font-medium ">
				<img
					className="w-[50px] h-[50px] border-[2px] border-gray-500 object-fit bg-gray-400 overflow-hidden"
					src={
						item.avatar_Url === '' || item.avatar_Url === undefined ?
							"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png" :
							item.avatar_Url
					}
					srcSet=""
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.nome_entreprise)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.identificateur_entreprise)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.representant_entreprise)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.role_dans_entriprise)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.ville_name)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{filter(item.activity_name)}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[30px] ">
				{item._status == "Pending" ? (
					<IconHalder
						Icon={() => <MdPendingActions />}
						style="text-[#353535]"
					/>
				) : item._status == "Approved" ? (
					<div>
						<IconHalder
							Icon={() => <BsCheckCircleFill />}
							style="text-[#0012ff]"
						/>
					</div>
				) : (
					<div>
						<IconHalder
							Icon={() => <IoIosCloseCircle />}
							style="text-[#ff0000]"
						/>
					</div>
				)}
			</td>
			{action ? <>
				<td
					className="px-6 py-4 whitespace-nowrap text-sm font-medium "
					onClick={(event) => { event.stopPropagation(); onClick() }}
				>
					<IconHalder
						Icon={() => <BsFillArrowRightSquareFill />}
						style="text-[20px]"
					/>
				</td>
				<td
					className="px-6 py-4 whitespace-nowrap text-sm font-medium "
					onClick={(event) => { event.stopPropagation(); OnEdit() }}
				>
					<IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
				</td>
			</> : <></>}

		</tr>
	);
};

function UserTable({ Data, OnSelect, OnEdit, onRowSelected, my = "10", action = true }) {
	return (
		<div className={`flex flex-col  border-[1px] my-${my} border-gray-200 rounded-lg w-full`}>
			<div className="min-w-full sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="">
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
										Logo{" "}
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Raison sociale
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										ICE
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Représentant Entreprise
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Fonction
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
										Secteur d'activité
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Statut
									</th>
									{action ? <>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Action
										</th>
										<th
											scope="col"
											className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
										>
											Modifier
										</th>
									</> : <></>}

								</tr>
							</thead>
							<tbody>
								{Data.map((item, index) => (
									<DataRow
										key={item.id}
										item={item}
										action={action}
										index={index}
										onRowSelected={() => onRowSelected(item)}
										OnEdit={() => OnEdit(item)}
										onClick={() => OnSelect(item)}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserTable;

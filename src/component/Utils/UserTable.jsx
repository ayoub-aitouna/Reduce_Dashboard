import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "../index";

const DataRow = ({ item, index, onClick = () => { }, OnEdit = () => { } }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.id}
			</td>
			<td className="px-4 py-4 whitespace-nowrap text-sm font-medium ">
				<img
					className="w-[50px] h-[50px] rounded-full object-cover bg-gray-400 overflow-hidden"
					src={
						"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
					}
					onerror="if (this.src != 'error.jpg') this.src = 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png';"
					srcSet=""
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.nome_entreprise}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.identificateur_entreprise}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.representant_entreprise}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.role_dans_entriprise}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.ville_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.activity_name}
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
			<td
				className="px-6 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => onClick()}
			>
				<IconHalder
					Icon={() => <BsFillArrowRightSquareFill />}
					style="text-[20px]"
				/>
			</td>
			<td
				className="px-6 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => OnEdit()}
			>
				<IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
			</td>
		</tr>
	);
};

function UserTable({ Data, OnSelect, OnEdit }) {
	return (
		<div className="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
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
								</tr>
							</thead>
							<tbody>
								{Data.map((item, index) => (
									<DataRow
										key={item.id}
										item={item}
										index={index}
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

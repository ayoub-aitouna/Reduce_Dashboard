import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "../index";

const DataRow = ({ item, index, onClick = () => { }, OnEdit = () => { }, action }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>

			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.full_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.sexe}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.adresse}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.ville_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.profession}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.tel}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.email}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.abonnement}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.statut}
			</td>
			{action ? <>
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
			</> : <></>}

		</tr>
	);
};

function ClientTable({ Data, OnSelect, OnEdit, my = 10, action = true }) {
	return (
		<div className={`flex flex-col  border-[1px] my-${my} border-gray-200 rounded-lg`}>
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="bg-white border-b">
								<tr>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										prénom et nom
									</th>

									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										sexe
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										adresse
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
										profession
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										tel
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Email
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Abonnement
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
										index={index}
										action={action}
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

export default ClientTable;

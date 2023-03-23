import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "../index";
const DataRow = ({ m_key, item, index, onClick }) => {
	console.log("received key: ", m_key);
	return (
		<tr key={m_key}
			onClick={() => onClick()}
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.id}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item._name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.email}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.ville_name}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item._role}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.account_status}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				<IconHalder
					Icon={() => <BsFillArrowRightSquareFill />}
					style="text-[20px]"
				/>
			</td>
		</tr>
	);
};

function AdminsTable({ Data, OnSelect }) {
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
										Nom
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
										Ville
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Fonction{" "}
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										statut du compte
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{Data.map((item, index) => {
									return (
										<>
											<DataRow
												m_key={index}
												item={item}
												index={index}
												onClick={() => OnSelect(item)}
											/>
										</>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminsTable;

import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { IconHalder } from "../index";

const DataRow = ({ item, index, OnEdit = () => { }, OnDelete = () => { } }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.value}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.name}
			</td>
			<td
				className="px-10 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => OnEdit()}
			>
				<IconHalder Icon={() => <AiFillEdit />} style="text-[20px] text-Cyan-500" />
			</td>
			<td
				className="px-10 py-4 whitespace-nowrap text-sm font-medium "
				onClick={() => OnDelete()}
			>
				<IconHalder Icon={() => <MdDeleteForever />} style="text-[20px] text-red-600" />
			</td>
		</tr>
	);
};

function Activities_table({ Data, OnSelect, OnEdit, OnDelete, my = "10" }) {
	return (
		<div className={`flex flex-col  border-[1px] my-${my} border-gray-200 rounded-lg `}>
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead className="bg-gray-200 border-b ">
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
										nom
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Modifier
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Supprimer
									</th>
								</tr>
							</thead>
							<tbody>
								{Data.map((item, index) => (
									(item.value != undefined) &&
									<DataRow
										key={item.id}
										item={item}
										index={index}
										OnDelete={() => OnDelete(item)}
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

export default Activities_table;

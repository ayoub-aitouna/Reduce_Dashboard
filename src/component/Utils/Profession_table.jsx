import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IconHalder } from "../index";

const DataRow = ({ item, index, OnEdit = () => { } }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-normal grid place-content-center">
				{item.name}
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
							<thead className="bg-white border-b ">
								<tr>
									<th
										scope="col"
										className="text-sm font-medium grid place-content-center text-gray-900 px-6 py-4 text-left">
										profession
									</th>
								</tr>
							</thead>
							<tbody>
								{Data.map((item, index) => (
									item.value != 0 && 
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

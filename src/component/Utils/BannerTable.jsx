import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IconHalder } from "../index";

const DataRow = ({ item, index, OnEdit = () => { } }) => {
	return (
		<tr
			className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${index % 2 == 0 ? "bg-gray-100" : "bg-white"
				} border-b`}
		>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.Baniere_ordre}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				<img
					className="w-[50px] h-[50px] border-[2px] border-gray-500 object-fit bg-gray-400 overflow-hidden"
					src={
						item.Logo === '' || item.Logo === undefined ?
							"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png" :
							item.Logo
					}
					srcSet=""
				/>
			</td>
			<td className="px-5 py-0 whitespace-nowrap text-sm font-medium ">
				<img
					className="w-[200px] h-[70px]  border-[2px] border-gray-500 rounded-md object-fit bg-gray-400 overflow-hidden"
					src={
						item.Couverture === '' || item.Couverture === undefined ?
							"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png" :
							item.Couverture
					}
					srcSet=""
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.Offer}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.Adresse}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.Tel}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
				{item.statut}
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

function BannerTable({ Data, OnEdit }) {
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
										Baniere ordre
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
										Couverture
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
									>
										Offer
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
										Tel
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

export default BannerTable;

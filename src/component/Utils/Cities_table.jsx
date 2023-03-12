import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const DataRow = ({ item, index, onClick = () => { }, OnEdit = () => { }, onRowSelected = () => { } }) => {
	const [checked, setChecked] = useState(item.status);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<tr
			onClick={() => onRowSelected()}
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
				className="px-6 py-4 whitespace-nowrap text-sm font-medium flex-1"
			>
				<FormControlLabel control={<Switch  />} checked={checked} onChange={handleChange}  label={checked ? "Active" : "Desabled"} />
			</td>
		</tr>
	);
};

function Cities_table({ Data, OnSelect, OnEdit, onRowSelected, my = "10" }) {
	return (
		<div className={`flex flex-col  border-[1px] my-${my} border-gray-200 rounded-lg `}>
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
										name
									</th>
									<th
										scope="col"
										className="text-sm font-medium text-gray-900 px-6 py-4 text-center w-1/2"
									>
										status
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

export default Cities_table;

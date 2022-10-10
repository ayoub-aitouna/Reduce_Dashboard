import React from "react";

function DataRow({ data }) {
	return (
		<div>
			{data.map((item) => (
				<>
					<li className=''></li>
				</>
			))}
		</div>
	);
}

export default DataRow;

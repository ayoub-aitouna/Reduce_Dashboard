import React from "react";

function Button({ title, Icon, style }) {
	return (
		<div className={`flex flex-row justify-center items-center ${style}`}>
			<p>{title}</p>
			<Icon />
		</div>
	);
}

export default Button;

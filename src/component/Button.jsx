import React from "react";

function Button({ title, Icon, OnClick, style }) {
	return (
		<div
			onClick={OnClick()}
			className={`flex flex-row justify-center items-center w-[520px] h-[65px] p-[40px] gap-[8px] bg-[#2E5CFF] rounded-[12px] flex-none flex-grow-0 order-[0] ${style}`}>
			<p>{title}</p>
			<Icon />
		</div>
	);
}

export default Button;

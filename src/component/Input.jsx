import React from "react";

const Input = ({ OnChange, value, hint, title, type }) => {
	return (
		<>
			<div className='flex flex-col justify-start items-start gap-[8px] w-[520px] h-[77px]'>
				<h1 className='w-[40px] h-[20px] font-normal text-[16px] text-[#000] leading-[20px]'>
					{title}
				</h1>
				<input
					className=' w-[520px] h-[49px] border-[1px] border-[#E4E4E7] rounded-[12px]  focus:border-[#617EE7]'
					placeholder={hint}
					type={type}
					onChange={onchange()}
					value={value}
				/>
			</div>
		</>
	);
};
export default Input;

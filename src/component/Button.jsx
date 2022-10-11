import React from "react";

function Button({
  title = "title",
  Icon = () => <></>,
  OnClick = () => {},
  style = "",
}) {
  return (
    <div
      onClick={() => OnClick()}
      className={`flex flex-row justify-center items-center w-[520px]
	   h-[65px] p-[40px] gap-[8px] bg-[#2E5CFF] rounded-[12px] flex-none flex-grow-0 order-[0] max-w-full text-white cursor-pointer ${style}`}
    >
      <Icon />
      <p>{title}</p>
    </div>
  );
}
export default Button;

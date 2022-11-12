import React from "react";

function Button({
  title = "title",
  Icon = () => <></>,
  OnClick = () => {},
  style = "",
  type = "",
}) {
  return (
    <button
      type="submit"
      onClick={() => OnClick()}
      className={`flex flex-row justify-center items-center w-[520px] text-center
	   h-[65px]  gap-[8px] bg-[#2E5CFF] rounded-[12px] flex-none flex-grow-0 order-[0] max-w-full text-white cursor-pointer ${style}`}
    >
      <Icon />
      <p>{title}</p>
    </button>
  );
}
export default Button;

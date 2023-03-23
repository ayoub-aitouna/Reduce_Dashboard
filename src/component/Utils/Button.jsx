import React from "react";

function Button({
  title = "title",
  orientation = 1,
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
	   h-[65px]  gap-[15px] bg-[#2E5CFF] rounded-[12px] flex-none flex-grow-0 order-[0] max-w-full  text-white cursor-pointer ${style}`}
    >
     { orientation == 0 ? <Icon />:<></>}
      <p>{title}</p>
      {orientation == 1 ? <Icon />:<></>}
    </button>
  );
}
export default Button;

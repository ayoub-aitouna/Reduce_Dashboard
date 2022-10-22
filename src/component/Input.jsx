import React from "react";

const Input = ({
  OnChange = () => {},
  value = "",
  hint,
  title,
  type,
  style,
}) => {
  return (
    <>
      <div
        className={`flex flex-col justify-start items-start gap-[12px] w-[520px] h-[97px] ${style}`}
      >
        <h1 className=" h-[20px] text-[18px] text-[#000] leading-[20px] font-bold ml-2">
          {title}
        </h1>
        <input
          className=" w-[520px] !h-[62px] py-2 border-[1px] border-[#E4E4E7] rounded-[12px]  focus:border-[#617EE7] px-4"
          placeholder={hint}
          type={type}
          onChange={(e) => {
            console.log("ff. :" + e.target.value);
            OnChange(e.target.value);
          }}
          //value={value}
        />
      </div>
    </>
  );
};
export default Input;

import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
const ErrorMsg = ({ error }) => {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    console.log(error.val);
    error.val > 0 ? setShow(true) : setShow(false);
  }, [error]);
  const handleclose = () => {
    setShow(false);
  };
  return Show ? (
    <div className="relative bg-red-200 w-full min-h-[80px] rounded-md my-2 max-w-250px shadow-md flex items-center jutify-center px-10 text-lg font-normal">
      <h1 className="w-full">{error.msg}</h1>
      <div
        className="cursor-pointer text-[#ff0000] font-black"
        onClick={handleclose}
      >
        <AiOutlineClose />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ErrorMsg;

import React from "react";
import { SideBarLinks } from "../constants.js";
import { FaRobot } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { Button } from "./index";
function Sidebar() {
  return (
    <div className="absolute w-[259.19px] h-[100vh] top-0 left-0 bg-[#fff] pt-[20px] px-10 flex flex-col py-10 shadow-lg">
      <div className="flex flex-row text-[#2E5CFF] text-4xl font-black gap-2 justify-start items-center pb-9">
        <FaRobot />
        <h1 className="text-2xl">Reduce</h1>
      </div>
      <ul className="flex flex-col gap-8 justify-center items-start w-full ">
        {SideBarLinks.map((item) => (
          <>
            <li
              key={item.key}
              className=" flex flex-col justify-start items-start gap-[10px]"
            >
              <h3 className="text-[20px] leading-[20px] font-bold pb-[10px]">
                {item.groupName}
              </h3>
              <ul className="flex flex-col gap-5 w-full">
                {item.tabs.map((tab) => (
                  <>
                    <li
                      key={tab.key}
                      className=" flex w-[180px] flex-col justify-center items-start  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white"
                    >
                      <p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
                        <tab.Icon />
                        {tab.name}
                      </p>
                    </li>
                  </>
                ))}
              </ul>
            </li>
          </>
        ))}
      </ul>
      <Button
        title={"Log out"}
        Icon={() => <BiExit />}
        OnClick={() => {
          alert("Loged Out");
        }}
        style="!h-[30px] p-[30px] mt-auto"
      />
    </div>
  );
}

export default Sidebar;

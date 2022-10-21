import React, { useState, useEffect } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
import { Filter_Selector, SearchBar, Button, Edite_Task } from "./index";
import { BaseUrl } from "../constants";
import { Outlet } from "react-router-dom";
import { matchRoutes, useLocation, useNavigate, Link } from "react-router-dom";

const Tasks = () => {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [City, setCity] = useState("");
  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [AccountState, setAccountState] = useState("");
  let navigate = useNavigate();

  const [SelectedPartner, setSelectedpartner] = useState({});
  let [data, setdata] = useState([]);
  const location = useLocation();
  return (
    <div className="p-5 my-10 flex flex-col gap-5">
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} />
        <div className="w-full h-[127px] flex flex-row items-center justify-start gap-5">
          <Link
            to={""}
            className=" flex w-[180px] flex-col justify-center items-center  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white"
          >
            <p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
              Anounsment
            </p>
          </Link>
          <Link
            to={"task_done"}
            className=" flex w-[180px] flex-col justify-center items-center  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white"
          >
            <p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
              Done Tasks
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Tasks;

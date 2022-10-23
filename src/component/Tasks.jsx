import React, { useState, useEffect } from "react";
import { UserTable } from "./index";
import { PartnerInfo } from "./index";
import {
  Filter_Selector,
  SearchBar,
  Button,
  Edite_Task,
  AddNewDoneTask,
} from "./index";
import { BaseUrl } from "../constants";
import { Outlet } from "react-router-dom";
import { matchRoutes, useLocation, useNavigate, Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";

const Tasks = ({ setSearch }) => {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [City, setCity] = useState("");
  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [AccountState, setAccountState] = useState("");
  let navigate = useNavigate();
  const [isNew_Task_Dialog_Opend, setNew_Task_Dialog_Opend] = useState(false);

  const [SelectedPartner, setSelectedpartner] = useState({});
  let [data, setdata] = useState([]);
  const location = useLocation();
  return (
    <div className="p-5 h-[95%] relative my-10 flex flex-col gap-5">
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <Link
          to={"task_search"}
          className=" flex w-full flex-col justify-center items-center
           cursor-pointer  text-[#475569] rounded-md "
        >
          <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
        </Link>

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
      <AddNewDoneTask
        open={isNew_Task_Dialog_Opend}
        OnClick={() => {
          setNew_Task_Dialog_Opend(false);
        }}
      />
      <Outlet />
      <div className=" absolute bottom-8 right-8 flex flex-col gap-5">
        <Button
          Icon={() => <BiTask />}
          title={"Add Task"}
          OnClick={() => setNew_Task_Dialog_Opend(true)}
          style={"!w-[250px] text-[19px] "}
        />
      </div>
    </div>
  );
};

export default Tasks;

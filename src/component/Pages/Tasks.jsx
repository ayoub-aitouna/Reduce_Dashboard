import React, { useState, useEffect } from "react";

import { SearchBar, Button, AddNewDoneTask } from "../index";
import { NavLink, Outlet } from "react-router-dom";
import { BiTask } from "react-icons/bi";

const Tasks = ({ setSearch, setRef }) => {
  const [isNew_Task_Dialog_Opend, setNew_Task_Dialog_Opend] = useState(false);

  return (
    <div className="p-5 h-[100%]  my-10 flex flex-col gap-5">
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <NavLink
          end
          to={"task_search"}
          className=" flex w-full flex-col justify-center items-center
           cursor-pointer  text-[#475569] rounded-md "
        >
          <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
        </NavLink>

        <div className="w-full h-[127px] flex flex-row items-center justify-start gap-5">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2E5CFF" : "#c0c0c0",
            })}
            to={""}
            className=" flex w-[180px] flex-col justify-center items-center  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white shadow-lg"
          >
            <p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
              Tâches programmées
            </p>
          </NavLink>
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2E5CFF" : "#c0c0c0",
            })}
            to={"task_done"}
            className=" flex w-[180px] flex-col justify-center items-center  cursor-pointer px-2 py-3 text-[#475569] rounded-md hover:bg-[#2E5CFF] hover:text-white  shadow-lg"
          >
            <p className="leading-[20px] font-semibold text-[15px] flex flex-row justify-center items-center gap-3">
              Tâches Effectuées
            </p>
          </NavLink>
        </div>
      </div>
      <AddNewDoneTask
        open={isNew_Task_Dialog_Opend}
        setRef={setRef}
        OnClick={() => {
          setNew_Task_Dialog_Opend(false);
        }}
      />
      <Outlet />
      <div className=" absolute bottom-8 right-8 flex flex-col gap-5">
        <Button
          Icon={() => <BiTask />}
          title={"Ajoutez une tâche"}
          OnClick={() => setNew_Task_Dialog_Opend(true)}
          style={"!w-[250px] text-[15px] "}
        />
      </div>
    </div>
  );
};

export default Tasks;

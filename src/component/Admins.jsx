import React, { useState, useEffect } from "react";
import { AdminsTable } from "./index";
import { ActionsDialog } from "./index";
import { IoMdPersonAdd } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { BaseUrl } from "../constants";

import {
  Filter_Selector,
  SearchBar,
  Button,
  AddNewAdmin,
  Add_new_task as AddNewTask,
} from "./index";
function Admins() {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [isNew_Admin_Dialog_Opend, setNew_Admin_Dialog_Opend] = useState(false);
  const [isNew_Task_Dialog_Opend, setNew_Task_Dialog_Opend] = useState(false);
  const [City, setCity] = useState("");
  const [Role, setRole] = useState("");
  const [AccountState, setAccountState] = useState("");
  const [SelectedPartner, setSelectedpartner] = useState({});
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${BaseUrl}`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          referrerPolicy: "no-referrer",
        });
        const data = req.json();
        setdata(data);
      } catch (err) {}
    }
  }, []);
  return (
    <div className="p-5 my-10  ">
      <ActionsDialog
        open={isDialogOpend}
        OnClick={() => {
          setDialogOpend(false);
        }}
        data={SelectedPartner}
      />
      <AddNewAdmin
        open={isNew_Admin_Dialog_Opend}
        OnClick={() => {
          setNew_Admin_Dialog_Opend(false);
        }}
        data={SelectedPartner}
      />
      <AddNewTask
        open={isNew_Task_Dialog_Opend}
        OnClick={() => {
          setNew_Task_Dialog_Opend(false);
        }}
        data={SelectedPartner}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Reduce Admins
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          All Managers and Admins of Reduce
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} />
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"Role"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Admin" },
              { value: 2, name: "Manager" },
            ]}
            setFilter={(value) => setRole(value)}
            Filter={Role}
          />
          <Filter_Selector
            title={"Account State"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Suspanded" },
              { value: 2, name: "Active" },
              { value: 2, name: "Banned" },
            ]}
            setFilter={(value) => setAccountState(value)}
            Filter={AccountState}
          />
          <Filter_Selector
            title={"Ville"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "" },
              { value: 1, name: "Marrakech" },
              { value: 2, name: "Beni Mellal" },
            ]}
            setFilter={(value) => setCity(value)}
            Filter={City}
          />
        </div>
      </div>
      <div className=" absolute bottom-8 right-8 flex flex-col gap-5">
        <Button
          Icon={() => <IoMdPersonAdd />}
          title={"Add Manager"}
          OnClick={() => setNew_Admin_Dialog_Opend(true)}
          style={"!w-[250px] text-[19px] "}
        />
        <Button
          Icon={() => <BiTask />}
          title={"Add Task"}
          OnClick={() => setNew_Task_Dialog_Opend(true)}
          style={"!w-[250px] text-[19px] "}
        />
      </div>
      <AdminsTable
        Data={data}
        OnSelect={(data) => {
          setSelectedpartner(data);
          setDialogOpend(true);
        }}
      />
    </div>
  );
}

export default Admins;

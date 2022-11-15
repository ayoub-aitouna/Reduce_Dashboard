import React, { useState, useEffect } from "react";

import { IoMdPersonAdd } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { get_villes } from "../../Utils/villes/get_villes";
import {
  Filter_Selector,
  SearchBar,
  Button,
  AddNewAdmin,
  AdminsTable,
  Add_new_task as AddNewTask,
  UpdateAdmin,
} from "../index";

function Admins() {
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [isNew_Admin_Dialog_Opend, setNew_Admin_Dialog_Opend] = useState(false);
  const [isNew_Task_Dialog_Opend, setNew_Task_Dialog_Opend] = useState(false);
  const [City, setCity] = useState("");
  const [Role, setRole] = useState("");
  const [villes, setvilles] = useState([]);
  const [AccountState, setAccountState] = useState("");
  const [SelectedAdmin, setSelectedAdmin] = useState({});
  const [data, setdata] = useState([]);
  const [activity_entrprise, setactivity_entrprise] = useState("");
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  let [Odata, setOdata] = useState([]);
  let [Ref, setRef] = useState(0);

  const fetchData = async () => {
    try {
      const req = await fetch(`${BaseUrl}/admin`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) {
        const data = await req.json();
        setOdata(data);
      } else {
        console.log(req);
      }
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
    get_villes(setvilles);
  }, [Ref]);

  useEffect(() => {
    setdata(
      Search != ""
        ? Odata.filter((item) =>
            item._name.toLowerCase().includes(Search.toLowerCase())
          )
        : Odata
    );
    setdata((per) =>
      City != 0 ? per.filter((item) => item.ville == City) : per
    );
    setdata((per) =>
      Role != 0 ? per.filter((item) => item._role == Role) : per
    );
    setdata((per) =>
      AccountState != 0
        ? per.filter((item) => item.account_status == AccountState)
        : per
    );
  }, [Search, City, Role, AccountState, Odata]);
  return (
    <div className="p-5 my-10  ">
      <AddNewAdmin
        open={isNew_Admin_Dialog_Opend}
        setRef={setRef}
        OnClick={() => {
          setNew_Admin_Dialog_Opend(false);
        }}
      />
      <AddNewTask
        open={isNew_Task_Dialog_Opend}
        OnClick={() => {
          setNew_Task_Dialog_Opend(false);
        }}
      />
      <UpdateAdmin
        open={isDialogOpend}
        setRefresh={setRef}
        OnClick={() => {
          setDialogOpend(false);
        }}
        admin={SelectedAdmin}
      />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Administrateurs de Reducte
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Tous les managers et administrateurs de Reducte
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
        <div className="flex flex-row w-full mt-10 gap-5 justify-start items-center">
          <Filter_Selector
            title={"Fonction"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "Toute" },
              { value: "Admin", name: "Administrateur" },
              { value: "Manager", name: "Responsable" },
            ]}
            setFilter={(value) => setRole(value)}
            Filter={Role}
          />
          <Filter_Selector
            title={"Statut Du Compte"}
            styles={"h-[95px]"}
            options={[
              { value: 0, name: "Toute" },
              { value: "Suspanded", name: "Suspanded" },
              { value: "Active", name: "Active" },
              { value: "Banned", name: "Banned" },
            ]}
            setFilter={(value) => setAccountState(value)}
            Filter={AccountState}
          />
          <Filter_Selector
            title={"Ville"}
            styles={"h-[95px]"}
            options={villes}
            setFilter={(value) => setCity(value)}
            Filter={City}
          />
        </div>
      </div>
      <div className=" absolute bottom-8 right-8 flex flex-row gap-5">
        <Button
          Icon={() => <IoMdPersonAdd />}
          title={"Ajoutez Un Responsable"}
          OnClick={() => setNew_Admin_Dialog_Opend(true)}
          style={"!w-[250px] text-[15px] shadow-lg"}
        />
        <Button
          Icon={() => <BiTask />}
          title={"Ajoutez Une Tâche"}
          OnClick={() => setNew_Task_Dialog_Opend(true)}
          style={"!w-[250px] text-[15px] shadow-lg "}
        />
      </div>
      <AdminsTable
        Data={data}
        OnSelect={(data) => {
          setSelectedAdmin(data);
          setDialogOpend(true);
        }}
      />
    </div>
  );
}

export default Admins;

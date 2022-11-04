import React, { useState, useEffect } from "react";
import { AiOutlineFileDone } from "react-icons/ai";

import { IconHalder, SetAsDone } from "./index";
import { BaseUrl, Coockies_name } from "../constants";

import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

// Data Row
const DataRow = ({ item, index, onClick = () => {} }) => {
  return (
    <tr
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${
        index % 2 == 0 ? "bg-gray-100" : "bg-white"
      } border-b`}
    >
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.id}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.partner_name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        "En cours"
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.adrress}
      </td>
      <td
        class="px-6 py-4 whitespace-nowrap text-sm font-medium "
        onClick={() => {
          onClick(item);
        }}
      >
        <IconHalder Icon={() => <AiOutlineFileDone />} style="text-[20px]" />
      </td>
    </tr>
  );
};

// on edite clikced
function OnSelect(item) {
  alert("");
}

// task done Components
const Task_anounsments = () => {
  let [data, setdata] = useState([]);
  let [refrech, setrefrech] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [isDialogOpend, setDialogOpend] = useState(false);
  const [SelectedTask, setSelectedTask] = useState({
    id: 1,
    partner_name: "",
    partner_status: "",
  });

  const handleRequest = async () => {
    try {
      const req = await fetch(`${BaseUrl}/Tasks/announcement`, {
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
        console.log(data);
        setdata(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    handleRequest();
  }, [refrech]);
  data = data.filter((v) => v.task_status == "Pending");
  return (
    <div class="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
      <SetAsDone
        setrefrech={setrefrech}
        open={isDialogOpend}
        OnClick={() => {
          setDialogOpend(false);
        }}
        item={SelectedTask}
      />
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Partenaire
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Statut
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Ville
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Adresse
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Résultat
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <>
                    <DataRow
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={(selected) => {
                        setDialogOpend(true);
                        setSelectedTask({
                          id: item.id,
                          partner_name: item.partner_name,
                          partner_status: "",
                        });
                      }}
                    />
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_anounsments;

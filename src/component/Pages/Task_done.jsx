import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IconHalder, Edite_Task } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";

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
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.partner_full_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.phone_number}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.note}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {`${new Date(item.data_of_visite).getDate()}/${new Date(
          item.data_of_visite
        ).getMonth()}/${new Date(item.data_of_visite).getFullYear()}`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.partner_status == "intrested"
          ? "Intéressé"
          : item.partner_status == "not_intrested"
          ? "Pas intéressé"
          : "En cours"}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item._name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_name}
      </td>
      <td
        class="px-6 py-4 whitespace-nowrap text-sm font-medium "
        onClick={() => {
          const { id, partner_name, partner_status } = item;
          onClick();
        }}
      >
        <IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
      </td>
    </tr>
  );
};

// task done Components
const Task_done = ({ Ref }) => {
  let [data, setdata] = useState([]);
  let [isEdite_Task_Dialog_Opend, setEdite_Task_Dialog_Opend] = useState(false);
  let [refrech, setrefrech] = useState(0);

  const [SelectedTask, setSelectedTask] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  const handleRequest = async () => {
    try {
      const req = await fetch(`${BaseUrl}/Tasks/done`, {
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
        setdata(data);
      } else {
        console.error(await req.json());
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    handleRequest();
  }, [refrech]);

  useEffect(() => {
    setrefrech((val) => val + 1);
  }, [Ref]);

  return (
    <div class="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
      <Edite_Task
        setRef={setrefrech}
        open={isEdite_Task_Dialog_Opend}
        setSelectedTask={setSelectedTask}
        OnClick={() => {
          setEdite_Task_Dialog_Opend(false);
        }}
        SelectedTask={SelectedTask}
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
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Nom et Prenom
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Tele
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Note
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Visite Date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    statut
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Manager
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ville
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Modifier
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
                      onClick={() => {
                        setSelectedTask(item);
                        setEdite_Task_Dialog_Opend(true);
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
export default Task_done;

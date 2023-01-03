import React, { useState, useEffect } from "react";

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
        ).getMonth() + 1 }/${new Date(item.data_of_visite).getFullYear()}`}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.partner_status === "intrested"
          ? "Intéressé"
          : item.partner_status === "not_intrested"
          ? "Pas intéressé"
          : item.partner_status === "thinking"
          ? "En cours"
          : "toujours en attente"}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item._name != undefined ? item._name : "Not Available "}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_name}
      </td>
    </tr>
  );
};

const TaskSearch = ({ Search }) => {
  let [Data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  const HandleRequest = async () => {
    try {
      const req = await fetch(
        `${BaseUrl}/Tasks/search?partner_name=${Search}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.accesToken}`,
          },
          referrerPolicy: "no-referrer",
        }
      );
      if (req.ok) {
        const data = await req.json();
        if (data.length > 0) {
          setData(data);
        }
      }
    } catch (err) {}
  };
  useEffect(() => {
    HandleRequest();
  }, [Search]);
  return (
    <div class="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
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
                    partner name
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
                    partner status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Auteur
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ville name
                  </th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item, index) => (
                  <>
                    <DataRow
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={() => {}}
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

export default TaskSearch;

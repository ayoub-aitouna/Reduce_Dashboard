import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "./index";
const DataRow = ({ item, index, onClick }) => {
  return (
    <tr
      onClick={() => onClick()}
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${
        index % 2 == 0 ? "bg-gray-100" : "bg-white"
      } border-b`}
    >
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.id}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={item.avatar_Url}
          alt="entreprise Logo"
          srcset=""
        />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.nome_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.identificateur_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.representant_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.role_dans_entriprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_nome}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.activity_entrprise_nome}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[30px] ">
        {item.status == "Pending" ? (
          <IconHalder
            Icon={() => <MdPendingActions />}
            style="text-[#353535]"
          />
        ) : item.status == "Acepted" ? (
          <div>
            <IconHalder
              Icon={() => <BsCheckCircleFill />}
              style="text-[#0012ff]"
            />
          </div>
        ) : (
          <div>
            <IconHalder
              Icon={() => <IoIosCloseCircle />}
              style="text-[#ff0000]"
            />
          </div>
        )}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        <IconHalder
          Icon={() => <BsFillArrowRightSquareFill />}
          style="text-[20px]"
        />
      </td>
    </tr>
  );
};
function UserTable({ Data, OnSelect, selectedstatus }) {
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
                    logo{" "}
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Nome Entreprise
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Identificateur Entreprise
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Representant Rntreprise
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Role Dans Entriprise
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Ville Nome
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Activity Entrprise Nome
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
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
                      onClick={() => OnSelect(item)}
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
}

export default UserTable;

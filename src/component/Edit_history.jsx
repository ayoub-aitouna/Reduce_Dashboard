import React, { useState, useEffect } from "react";
import { SearchBar } from "./index";
import { BaseUrl, Coockies_name } from "../constants";
import { useCookies } from "react-cookie";

function Edit_history() {
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  let [data, setdata] = useState([]);
  return (
    <div className="p-5 my-10">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Edites Histroy
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Edits that been preformed by the managers and admins on partners
        </p>
      </div>
      <div className="flex ld:flex-row flex-col w-full mt-10 lg:gap-5 gap-0 justify-center items-center">
        <SearchBar styles={"max-h-[15px] !w-full"} setSearch={setSearch} />
      </div>
      <EditeTable Data={data} />
    </div>
  );
}

function EditeTable({ Data }) {
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
                    Admin Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Partner Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item, index) => (
                  <>
                    <DataRow key={item.id} item={item} index={index} />
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

const DataRow = ({ item, index }) => {
  return (
    <tr
      className={` text-gray-900 hover:text-[#fff] hover:bg-[#2E5CFF] cursor-pointer ${
        index % 2 == 0 ? "bg-gray-100" : "bg-white"
      } border-b`}
    >
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.admin_name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.partner_name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.created_date}
      </td>
    </tr>
  );
};

export default Edit_history;

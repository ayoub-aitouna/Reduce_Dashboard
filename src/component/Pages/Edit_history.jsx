import React, { useState, useEffect } from "react";
import { SearchBar } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";

function Edit_history() {
  const [Search, setSearch] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  let [data, setdata] = useState([]);
  let [Odata, setOdata] = useState([]);

  const handleRequest = async () => {
    try {
      const req = await fetch(`${BaseUrl}/admin/get_modify_history`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.accesToken}`,
        },
        referrerPolicy: "no-referrer",
      });
      if (req.ok) setOdata(await req.json());
    } catch (err) {}
  };

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    setdata(
      Search != ""
        ? Odata.filter((item) =>
            item._name.toLowerCase().includes(Search.toLowerCase())
          )
        : Odata
    );
  }, [Search, Odata]);

  return (
    <div className="p-5 my-10">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">
          Historique des modifications
        </h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Modifications sur les partenaires
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
    <div className="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Nom administrateur
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Nom Partenaire
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item._name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.nome_entreprise}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {`${new Date(item.created_date).getDate()}/${new Date(
          item.created_date
        ).getMonth()}/${new Date(item.created_date).getFullYear()}`}
      </td>
    </tr>
  );
};

export default Edit_history;

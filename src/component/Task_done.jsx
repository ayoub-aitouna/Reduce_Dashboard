import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder, Edite_Task } from "./index";
import { BaseUrl } from "../constants";

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
        {item.partner_status}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.manager_name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ">
        {item.ville_name}
      </td>
      <td
        class="px-6 py-4 whitespace-nowrap text-sm font-medium "
        onClick={() => onClick(item)}
      >
        <IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
      </td>
    </tr>
  );
};

// task done Components
const Task_done = () => {
  let [data, setdata] = useState([]);
  let [isEdite_Task_Dialog_Opend, setEdite_Task_Dialog_Opend] = useState(false);
  let [SelectedTask, setSelectedTask] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${BaseUrl}/`, {
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
    <div class="flex flex-col  border-[1px] my-10 border-gray-200 rounded-lg ">
      <Edite_Task
        open={isEdite_Task_Dialog_Opend}
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
                    partner name
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
                    manager name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ville name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Edite
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
                      onClick={(item) => {
                        setEdite_Task_Dialog_Opend(true);
                        setSelectedTask(item);
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

import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { IconHalder } from "./index";

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
        onClick={() => onClick()}
      >
        <IconHalder Icon={() => <AiFillEdit />} style="text-[20px]" />
      </td>
    </tr>
  );
};

const TaskSearch = () => {
  return <div></div>;
};

export default TaskSearch;

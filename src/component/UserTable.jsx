import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const IconHolder = ({ Icon, style }) => {
  return (
    <>
      <div className={`text-[20px]  ${style}`}>
        <Icon />
      </div>
    </>
  );
};
const DataRow = ({ item, index }) => {
  return (
    <tr
      className={` text-[#353535] hover:text-[#fff] cur ${
        index % 2 == 0 ? "bg-gray-100" : "bg-white"
      } border-b`}
    >
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.id}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={item.avatar_Url}
          alt="entreprise Logo"
          srcset=""
        />
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.nome_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.identificateur_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.representant_entreprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.role_dans_entriprise}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.ville_nome}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {item.activity_entrprise_nome}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-[30px] ">
        {item.status == "Pending" ? (
          <IconHolder
            Icon={() => <MdPendingActions />}
            style="text-[#353535]"
          />
        ) : item.status == "Acepted" ? (
          <div>
            <IconHolder
              Icon={() => <BsCheckCircleFill />}
              style="text-[#0012ff]"
            />
          </div>
        ) : (
          <div>
            <IconHolder
              Icon={() => <IoIosCloseCircle />}
              style="text-[#ff0000]"
            />
          </div>
        )}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <IconHolder Icon={() => <BsFillArrowRightSquareFill />} style="" />
      </td>
    </tr>
  );
};
function UserTable({ Data }) {
  return (
    <div class="flex flex-col ">
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
  // return (
  // 	<table class='table-auto w-full p-[50px]'>
  // 		<thead>
  // 			<tr className='h-[77px] bg-[#2E5CFF] text-white'>

  // 			</tr>
  // 		</thead>
  // 		<tbody>
  // 			{Data.map((item) => (
  // 				<>
  // 					<DataRow key={item.id} item={item} />
  // 				</>
  // 			))}
  // 		</tbody>
  // 	</table>
  // );
}

export default UserTable;

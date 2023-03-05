import React, { useState, useEffect } from "react";

import {
  Filter_Selector,
  SearchBar,
  UpdatePartner,
  PartnerInfo,
  UserTable,
} from "../index";
import { BaseUrl, Coockies_name } from "../../constants";

function Statics({ selectedStatus }) {
  let [data, setdata] = useState([]);

  return (
    <div className="p-5 my-10 h-full">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-[20px] font-black leading-9 text-gray-800">Reducte Statiscs</h1>
        <p className="text-[16px] font-normal  leading-9 text-gray-500">
          Partenaires ayant soumis le formulaire à la plateforme Reducte
        </p>
      </div>
      <div className="mt-10  flex flex-row flex-wrap w-full h-[90%] justify-between gap-5 ">
        <div className="flex-1  rounded-xl flex flex-col items-start ">
          <h1 className="text-[20px] font-black leading-9 text-gray-800">Recently clinets</h1>
          <UserTable
            my="0"
            Data={data}
            selectedstatu={selectedStatus}
            OnSelect={(data) => {
            }}
            OnEdit={(data) => {
            }}
          />
        </div>
        <div className="flex-1  rounded-xl flex flex-col items-start justify-center">
          <h1 className="text-[20px]  font-black leading-9 text-gray-800">Recently clinets</h1>
          <div className="flex-1 ">
            <UserTable
              my="0"
              Data={data}
              selectedstatu={selectedStatus}
              OnSelect={(data) => {
              }}
              OnEdit={(data) => {
              }}
            />
          </div>

        </div>
        <div className="w-[100%]   rounded-xl flex flex-col items-start ">
          <h1 className="text-[20px] font-black leading-9 text-gray-800">Recently clinets</h1>
          <div className="flex-1  w-full">
            <UserTable
              my="0"
              Data={data}
              selectedstatu={selectedStatus}
              OnSelect={(data) => {
              }}
              OnEdit={(data) => {
              }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Statics;

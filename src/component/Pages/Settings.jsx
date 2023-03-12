import React, { useState, useEffect } from "react";

import {
    Cities_table,
    Activities_table,
    Button,
    UserTable,
} from "../index";
import { BiTask } from "react-icons/bi";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";
import { get_villes } from "../../Utils/villes/get_villes";
import { get_Activity } from "../../Utils/Activities/Activities";

function Settings() {
    const [villes, setvilles] = useState([]);
    const [activities, setactivities] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
    
    useEffect(()=>{
        get_villes(setvilles);
        get_Activity(setactivities)
    }, [])
    return (
        <div className="p-5 my-10 flex flex-row justify-between gap-6">
            <div className="flex-1">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-[20px] font-black leading-9 text-gray-800">
                        Reducte Villes
                    </h1>
                    <p className="text-[16px] font-normal  leading-9 text-gray-500">
                        Partenaires ayant soumis le formulaire à la plateforme Reducte
                    </p>
                </div>
                <Cities_table
                    Data={villes}
                    OnSelect={(data) => {

                    }}
                    OnEdit={(data) => {

                    }}
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-[20px] font-black leading-9 text-gray-800">
                        Reducte Activities
                    </h1>
                    <p className="text-[16px] font-normal  leading-9 text-gray-500">
                        Partenaires ayant soumis le formulaire à la plateforme Reducte
                    </p>
                </div>
                <Activities_table
                    Data={activities}
                    OnSelect={(item) => {

                    }}
                    OnEdit={(item) => {

                    }}
                />
            </div>
            <div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
                <Button
                    Icon={() => <BiTask />}
                    title={"Ajoutez Une Ville"}
                    OnClick={() => { }}
                    style={"!w-[250px] text-[15px] shadow-lg capitalize"}
                />
                <Button
                    Icon={() => <BiTask />}
                    title={"Ajoutez Une Activity"}
                    OnClick={() => { }}
                    style={"!w-[250px] text-[15px] shadow-lg capitalize"}
                />
            </div>

        </div>
    );
}

export default Settings;

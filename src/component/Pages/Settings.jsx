import React, { useState, useEffect } from "react";

import {
    Cities_table,
    Activities_table,
    Button,
    NewActivity,
    AddNewCity,
    Profession_table
} from "../index";
import { BiTask } from "react-icons/bi";
import { BaseUrl, Coockies_name } from "../../constants";
import { get_villes } from "../../Utils/villes/get_villes";
import { get_Activity } from "../../Utils/Activities/Activities";
import { get_profesional } from "../../Utils/profesional/get_profesional";

function Settings() {
    const [villes, setvilles] = useState([]);
    const [newcity, setnewcity] = useState(false);
    const [Refresh, setRefresh] = useState(0);
    const [newactivity, setnewactivity] = useState(false);
    const [activities, setactivities] = useState([]);
    const [Profession, setProfession] = useState([]);

    useEffect(() => {
        get_villes(setvilles);
        get_Activity(setactivities)
        get_profesional(setProfession)
    }, [Refresh])

    return (
        <div className="p-5 my-10 ">
            <NewActivity
                open={newactivity}
                setRefresh={setRefresh}
                OnClick={() => {
                    setnewactivity(false);
                }}
            />
            <AddNewCity
                open={newcity}
                setRefresh={setRefresh}
                OnClick={() => {
                    setnewcity(false);
                }}
            />
            <div className="flex flex-col ">
                <div className="p-5 my-10 flex flex-row justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex flex-col items-start justify-start">
                            <h6 className="text-[15px] font-bold text-gray-800">
                                Reducte Villes
                            </h6>
                        </div>
                        <Cities_table
                            Data={villes}
                            OnEdit={(data) => {

                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col items-start justify-start">
                            <h6 className="text-[15px] font-bold text-gray-800">
                                Reducte Activities
                            </h6>
                        </div>
                        <Activities_table
                            Data={activities}
                            OnEdit={(item) => {

                            }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col items-start justify-start">
                        <h6 className="text-[15px] font-bold text-gray-800">
                            Reducte Villes
                        </h6>
                    </div>
                    <Profession_table
                        Data={Profession}
                        OnEdit={(data) => {

                        }}
                    />
                </div>
            </div>

            <div className="absolute bottom-8 right-8 flex flex-row gap-5 capitalize ">
                <Button
                    Icon={() => <BiTask />}
                    title={"Ajoutez Une Ville"}
                    OnClick={() => { setnewcity(true); }}
                    style={"!w-[250px] text-[15px] shadow-lg capitalize"}
                />
                <Button
                    Icon={() => <BiTask />}
                    title={"Ajoutez Une Activity"}
                    OnClick={() => setnewactivity(true)}
                    style={"!w-[250px] text-[15px] shadow-lg capitalize"}
                />
                <Button
                    Icon={() => <BiTask />}
                    title={"Ajoutez Une Profession"}
                    OnClick={() => setnewactivity(true)}
                    style={"!w-[250px] text-[15px] shadow-lg capitalize"}
                />
            </div>

        </div>
    );
}

export default Settings;

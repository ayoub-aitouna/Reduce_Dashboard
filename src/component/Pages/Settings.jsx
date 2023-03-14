import React, { useState, useEffect } from "react";
import {
    Cities_table,
    Activities_table,
    Button,
    NewActivity,
    AddNewCity,
    Profession_table,
    EditeActivity,
    LinearIndeterminate
} from "../index";
import { BiTask } from "react-icons/bi";
import { get_villes } from "../../Utils/villes/get_villes";
import { get_Activity } from "../../Utils/Activities/Activities";
import { get_profesion } from "../../Utils/profesion/Profesion";

function Settings() {
    const [villes, setvilles] = useState([]);
    const [profession, setprofession] = useState([]);
    const [newcity, setnewcity] = useState(false);
    const [Refresh, setRefresh] = useState(0);
    const [newactivity, setnewactivity] = useState(false);
    const [editeActivity, setediteActivity] = useState(false);
    const [Activity, setActivity] = useState(0);
    const [activities, setactivities] = useState([]);

    useEffect(() => {
        get_profesion(setprofession);
        get_villes(setvilles);
        get_Activity(setactivities)
    }, [Refresh])

    const handleOpenEditeActivity = (id) => {
        setActivity(id);
        setediteActivity(true);
    }
    if(villes.length === 0 || Activity.length == 0)return <LinearIndeterminate />
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
            <EditeActivity
                open={editeActivity}
                setRefresh={setRefresh}
                activity={Activity}
                OnClick={() => {
                    setediteActivity(false);
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
                                console.log("clicked");
                                handleOpenEditeActivity(item.id);
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
                        Data={profession}
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

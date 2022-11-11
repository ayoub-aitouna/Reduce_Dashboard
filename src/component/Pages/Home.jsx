import React, { useEffect } from "react";
import { Sidebar, Partner } from "./index";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { BaseUrl, Coockies_name } from "../constants";
import { Check_if_user_valide } from "../Utils/Auth";
function Home() {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  let navigate = useNavigate();
  useEffect(() => {
    if (cookies == null || cookies == undefined) {
      navigate(`/`);
    }
  }, []);

  return (
    <div className="bg-gray-100 w-full h-full overflow-y-scroll overflow-x-hidden">
      <Sidebar />
      <div className="ml-[289.19px] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

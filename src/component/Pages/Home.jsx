import React, { useEffect } from "react";
import { Sidebar } from "../index";
import {
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { Coockies_name } from "../../constants";

function Home() {
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  let navigate = useNavigate();
  useEffect(() => {
    if (
      cookies.accesToken == null ||
      cookies.accesToken == undefined ||
      cookies.accesToken == ""
    ) {
      navigate(`/`);
    }
  }, [cookies.accesToken]);

  return (
    <div className="bg-gray-100 w-full h-full  overflow-auto overflow-x-hidden">
      <Sidebar />
      <div className="ml-[289.19px] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Sidebar, Partner } from "./index";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { check_if_user_valide } from "../Utils/Auth";
function Home() {
  let navigate = useNavigate();

  if (!check_if_user_valide()) {
    navigate(`/auth`);
  }
  return (
    <div className="bg-gray-100 w-full h-full overflow-y-scroll overflow-x-hidden">
      <Sidebar />
      <div className="ml-[259.19px] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

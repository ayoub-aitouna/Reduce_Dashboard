import React from "react";
import { Sidebar, Partner } from "./index";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  if (!check_if_user_valide()) {
    navigate(`/auth`);
  }
  return (
    <div className="bg-gray-100 w-full h-full overflow-y-scroll">
      <Sidebar />
      <div className="ml-[259.19px] h-full">
        <Partner />
      </div>
    </div>
  );
}

export default Home;

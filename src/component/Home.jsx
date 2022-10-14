import React from "react";
import { Sidebar, Partner, Admins } from "./index";
function Home() {
  return (
    <div className="bg-gray-100 w-full h-full overflow-y-scroll overflow-x-hidden">
      <Sidebar />
      <div className="ml-[259.19px] h-full">
        <Admins selectedstatus={"Approved"} />
      </div>
    </div>
  );
}

export default Home;

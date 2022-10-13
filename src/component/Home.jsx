import React from "react";
import { Sidebar, Partner, Admins } from "./index";
function Home() {
  return (
    <div className="bg-gray-100 w-full h-full overflow-y-scroll">
      <Sidebar />
      <div className="ml-[259.19px] h-full">
        <Partner selectedstatus={"Approved"} />
      </div>
    </div>
  );
}

export default Home;

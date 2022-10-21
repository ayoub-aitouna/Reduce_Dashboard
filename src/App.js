import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Home,
  Auth,
  Partner,
  Admins,
  Tasks,
  Task_anounsments,
  Task_done,
  TaskSearch,
} from "./component";
import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [Search, setSearch] = useState(null);

  return (
    <div className="w-full h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Auth />} />
          <Route path="/home" element={<Home />}>
            <Route exact path="" element={<Partner />} />
            <Route
              path="Pending_partners"
              element={<Partner selectedStatus="Pending" />}
            />
            <Route path="tasks" element={<Tasks setSearch={setSearch} />}>
              <Route exact path="" element={<Task_anounsments />} />
              <Route path="task_done" element={<Task_done />} />
              <Route
                path="task_search"
                element={<TaskSearch Search={Search} />}
              />
            </Route>
            <Route
              path="Rejected_partners"
              element={<Partner selectedStatus={"Rejected"} />}
            />
            <Route
              path="Approved_partners"
              element={<Partner selectedStatus={"Acepted"} />}
            />
            <Route path="Admin_managers" element={<Admins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

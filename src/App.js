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
  ForgotPass,
  Edit_history,
} from "./component";
import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [Search, setSearch] = useState("");
  const [Email, setEmail] = useState("");
  let [Ref, setRef] = useState(0);

  return (
    <div className="w-full h-[100vh] !pb-[50px]">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auth setEmail={setEmail} />} />
          <Route
            exact
            path="/forgot_pass"
            element={<ForgotPass Email={Email} />}
          />
          <Route path="/home" element={<Home />}>
            <Route exact path="" element={<Partner selectedStatus="" />} />
            <Route
              path="Pending_partners"
              element={<Partner selectedStatus="Pending" />}
            />
            <Route
              path="tasks"
              element={<Tasks setSearch={setSearch} setRef={setRef} />}
            >
              <Route exact path="" element={<Task_anounsments />} />
              <Route path="task_done" element={<Task_done Ref={Ref} />} />
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
              element={<Partner selectedStatus={"Approved"} />}
            />
            <Route path="edit_history" element={<Edit_history />} />
            <Route path="Admin_managers" element={<Admins />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function PageNotFound() {
  return (
    <div className="h-full font-black text-4xl grid place-content-center">
      <h2>404 Page not found</h2>
    </div>
  );
}

export default App;

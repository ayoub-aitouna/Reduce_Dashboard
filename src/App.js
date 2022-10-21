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
} from "./component";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
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
            <Route path="tasks" element={<Tasks />}>
              <Route exact path="" element={<Task_anounsments />} />
              <Route path="task_done" element={<Task_done />} />
              <Route path="task_search" element={<Task_done />} />
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

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Home, Auth, Partner, Admins } from "./component";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route excat path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />}>
            <Route path="/all_partners" element={<Partner />} />
            <Route path="/Pending_partners" element={<Partner selectedStatus="Pending" />} />
            <Route
              path="/Rejected_partners"
              element={<Partner selectedStatus={"Rejected"} />}
            />
            <Route
              path="/Approved_partners"
              element={<Partner selectedStatus={"Acepted"} />}
            />
            <Route path="/Admin_managers" element={<Admins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

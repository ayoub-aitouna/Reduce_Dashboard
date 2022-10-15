import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Home, Auth, Partner, Admins } from "./component";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-[100vh]">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route excat path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />}>
            <Route path="/" excat element={<Partner />} />
            <Route
              path="/rejected"
              element={<Partner selectedStatus={"accepted"} />}
            />
            <Route
              path="/ccepted"
              element={<Partner selectedStatus={"rejected"} />}
            />
            <Route
              path="/admins"
              element={<Partner selectedStatus={"rejected"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

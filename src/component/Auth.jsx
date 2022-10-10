import React, { useState } from "react";
import { Button, Input } from "./index";
import { FaRobot } from "react-icons/fa";

const AuthForm = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <form>
        <div className="w-full h-full w-black flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row text-[#2E5CFF] text-4xl font-black gap-2 justify-start items-center pb-9">
            <FaRobot />
            <h1 className="text-2xl">Reduce</h1>
          </div>
          <p>Merci d'entrer vos informations de connexion</p>
          <Input
            title="Email"
            hint={"Example@email.com"}
            OnChange={() => {}}
            value={login.email}
            type="email"
          />
          <Input
            title="mode de pass"
            hint={"*************"}
            OnChange={() => {}}
            value={login.password}
            type="passowrd"
          />
          <Button
            title={"Log out"}
            Icon={() => <></>}
            OnClick={() => {
              alert("Loged Out");
            }}
            style="!h-[30px] p-[30px] mt-auto"
          />
        </div>
      </form>
    </>
  );
};

function Auth() {
  return (
    <div className="w-full h-[100vh] grid place-content-center">
      <AuthForm />
    </div>
  );
}

export default Auth;

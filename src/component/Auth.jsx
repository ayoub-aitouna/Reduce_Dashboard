import React, { useState, useEffect } from "react";
import { Button, Input } from "./index";
import { FaRobot } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { BaseUrl, Coockies_name } from "../constants";

import { useNavigate } from "react-router-dom";

const login_submit = async (email, pass, callback = () => {}) => {
  try {
    const req = await fetch(`${BaseUrl}/api/v1/auth/admin}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    });
    const data = req.json();
    callback(data);
  } catch (err) {}
};

const AuthForm = () => {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);

  useEffect(() => {
    if (cookies != null && cookies != undefined) {
      navigate(`/home`);
    }
  }, []);

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <form>
        <div className="w-full h-full  flex flex-col justify-center items-center gap-5">
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
            type="password"
          />
          <Button
            title={"Log out"}
            Icon={() => <></>}
            OnClick={() => {
              login_submit(login.email, login.password, (value) => {
                setCookie(value);
              });
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

import React, { useState, useEffect } from "react";
import { Button, Input, LoadingIcon } from "./index";
import { useCookies } from "react-cookie";
import { BaseUrl, Coockies_name } from "../constants";
import Cookies from "js-cookie";
import { Icon_Auth } from "../assets";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (cookies.accesToken != null || cookies.accesToken != undefined) {
      navigate(`/home`);
    }
  }, []);

  const login_call = (data) => {
    setloading(false);
    console.log(data);
    Cookies.set("accesToken", data.accesToken);
    Cookies.set("role", data.rol);
    Cookies.set("name", data._name);

    setCookie("accesToken", data.accesToken, { path: "/" });
    setCookie("name", data._name, { path: "/" });
    setCookie("role", data.role, { path: "/" });
    navigate(`/home`);
  };

  const login_submit = async (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const req = await fetch(`${BaseUrl}/auth/admin`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          email: login.email,
          password: login.password,
        }),
      });
      if (req.ok) {
        login_call(await req.json());
      } else {
        setlogin({ ...login, password: "" });
        setloading(false);
        alert("error password or email not correct");
      }
    } catch (error_msg) {
      setlogin({ ...login, password: "" });
      setloading(false);
      alert("error password or email not correct");
    }
  };

  return (
    <>
      <form onSubmit={login_submit}>
        <div className="w-full h-full  flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row text-[#2E5CFF] text-4xl font-black gap-2 justify-start items-center pb-9">
            <img
              src={Icon_Auth}
              alt=""
              srcset=""
              className="w-[250px] object-cover"
            />
          </div>
          <p>Merci de saisir vos informations de connexion</p>
          <Input
            title="Email"
            hint={"Example@email.com"}
            OnChange={(value) => {
              setlogin({ ...login, email: value });
            }}
            value={login.email}
            type="email"
          />
          <Input
            title="Mot de passe"
            hint={"*************"}
            OnChange={(value) => {
              setlogin({ ...login, password: value });
            }}
            value={login.password}
            type="password"
          />
          <Button
            OnClick={() => login_submit()}
            title={"Connectez-vous"}
            Icon={() => LoadingIcon(loading)}
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

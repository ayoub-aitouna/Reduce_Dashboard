import React, { useState, useEffect } from "react";
import { BaseUrl, Coockies_name } from "../../constants";
import { useNavigate, NavLink } from "react-router-dom";
import { Dark_loading_icon } from "../index";
const ForgotPass = ({ Email }) => {
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [credintials, setcredintials] = useState({
    email: Email,
    key: "",
    _password: "",
    re_password: "",
  });
  useEffect(() => {
    setcredintials({
      ...credintials,
      email: Email,
    });
  }, [Email]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (credintials.re_password != credintials._password)
      alert("le mot de passe ne correspond pas");
    setloading(true);
    try {
      const req = await fetch(`${BaseUrl}/auth/reset_pass`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(credintials),
      });
      if (req.ok) {
        navigate("/");
      }
    } catch (error_msg) {
      setloading(false);
      console.log(error_msg);
      alert("error !!");
    }
    setloading(false);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {loading ? (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 h-[400px]  grid place-content-center">
            <Dark_loading_icon />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Changer le mot de passe
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
              onSubmit={(e) => handlesubmit(e)}
            >
              <div>
                <label
                  htmlFor="key"
                  className="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white"
                >
                  clé que vous avez reçue
                </label>
                <input
                  type="text"
                  onkeypress={(event) => {}}
                  name="key"
                  value={credintials.key}
                  onChange={(e) =>
                    setcredintials({
                      ...credintials,
                      key:
                        e.target.value.charCodeAt(e.target.value.length - 1) >=
                          48 &&
                        e.target.value.charCodeAt(e.target.value.length - 1) <=
                          57
                          ? e.target.value
                          : "",
                    })
                  }
                  id="key"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0 0 0 0 0 0"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block capitalize mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={credintials._password}
                  onChange={(e) =>
                    setcredintials({
                      ...credintials,
                      _password: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 capitalize text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirmez le mot de passe{" "}
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={credintials.re_password}
                  onChange={(e) =>
                    setcredintials({
                      ...credintials,
                      re_password: e.target.value,
                    })
                  }
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full uppercase bg-blue-800 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Réinitialiser le mot de passe
              </button>
              <button
                type=""
                onClick={() => {
                  navigate("/");
                }}
                className="w-full uppercase bg-gray-200 text-black hover:bg-gray-300  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForgotPass;

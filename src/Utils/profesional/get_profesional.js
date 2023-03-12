import { BaseUrl } from "../../constants";
const get_profesional = async (setprofesional) => {
  try {
    const req = await fetch(`${BaseUrl}/profession`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    });
    if (req.ok) {
      const data = await req.json();
      setprofesional([{ id: 0, name: "" }]);
      data.map((item) => {
        setprofesional((v) => [...v, { value: item.id, name: item.profession }]);
      });
    } else {
    }
  } catch (err) { }
};
export { get_profesional };

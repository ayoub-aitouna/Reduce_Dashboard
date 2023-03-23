import { BaseUrl } from "../../constants";
const get_profesion = async (setProfesion) => {
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
      console.log(data);
      setProfesion([{ value: 0, name: "" }]);
      data.map((item) => {
        setProfesion((v) => [
          ...v,
          { value: item.id, name: item.profession },
        ]);
      });
    } else {
    }
  } catch (err) { }
};

export { get_profesion };

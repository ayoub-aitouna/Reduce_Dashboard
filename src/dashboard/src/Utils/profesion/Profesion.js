import { BaseUrl } from "../../constants";
const get_profesion = async (setProfesion, add_empty = true) => {
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
      if (add_empty)
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

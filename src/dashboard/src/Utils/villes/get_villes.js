import { BaseUrl } from "../../constants";
const get_villes = async (setvilles, add_empty = true) => {
  try {
    const req = await fetch(`${BaseUrl}/Ville/All_Villes`, {
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
        setvilles([{ id: 0, name: "" }]);
      data.map((item) => {
        setvilles((v) => [...v, { value: item.id, name: item.ville_name, status: item.status }]);
      });
    } else {
    }
  } catch (err) { }
};
export { get_villes };

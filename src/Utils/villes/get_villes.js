import { BaseUrl } from "../../constants";
const get_villes = async (setvilles) => {
  console.log("call");
  try {
    const req = await fetch(`${BaseUrl}/Ville`, {
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
      setvilles([{ id: 0, name: "" }]);
      data.map((item) => {
        setvilles((v) => [...v, { value: item.id, name: item.ville_name }]);
      });
    } else {
    }
  } catch (err) {}
};
export { get_villes };

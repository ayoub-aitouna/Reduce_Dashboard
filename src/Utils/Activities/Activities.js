import { BaseUrl } from "../../constants";
const get_Activity = async (setActivity) => {
  try {
    const req = await fetch(`${BaseUrl}/Activities`, {
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
      setActivity([{ id: 0, name: "" }]);
      data.map((item) => {
        setActivity((v) => [
          ...v,
          { value: item.id, name: item.activity_name },
        ]);
      });
    } else {
    }
  } catch (err) {}
};
export { get_Activity };

import { BaseUrl } from "../../constants";
const get_Activity = async (setActivity, add_empty = true) => {
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
      if (add_empty)
        setActivity([{ id: 0, name: "" }]);
      data.map((item) => {
        setActivity((v) => [
          ...v,
          { value: item.id, name: item.activity_name },
        ]);
      });
    } else {
    }
  } catch (err) { }
};
export { get_Activity };

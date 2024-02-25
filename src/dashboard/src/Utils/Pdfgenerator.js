import { Pdf_contract_template } from "./Templates";
import jsPDF from "jspdf";

const Generate_contract_Pdf = async (partner_data) => {
  const content = Pdf_contract_template(partner_data);
  const doc = new jsPDF("p", "pt", "a4");
  return new Promise((res, rej) => {
    doc.html(
      `<div style="width:550px;
      font-style: normal;
      font-weight: normal;
      text-decoration: none;
      font-size: 9pt;
      display: grid;
      place-content: center;
      padding: 10px;
      ">${content}</div>`,
      {
        margin: [25, 5, 25, 5],
        autoPaging: true,
        options: { pagesplit: true },
        callback: (doc) => {
          var blob = new Blob([doc.output("blob")], {
            type: "application/pdf",
          });
          res(blob);
        },
      }
    );
  });
};
export { Generate_contract_Pdf };

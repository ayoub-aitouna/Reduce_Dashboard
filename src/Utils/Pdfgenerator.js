import { Pdf_contract_template } from "./Templates";
import jsPDF from "jspdf";

const Generate_contract_Pdf = async (partner_data) => {
  const { content } = Pdf_contract_template(partner_data);
  var doc = new jsPDF("p", "pt", "a4");
  return new Promise((res, rej) => {
    doc.html(
      ` <div style="width:550px;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
        display: grid;
        place-content: center;
        padding: 10px;
        ">${content}</div>`,
      {
        callback: function (doc) {
          // var blob = new Blob([doc.output("blob")], { type: "application/pdf" });
          // res(blob);
          // var blobUrl = URL.createObjectURL(blob);
          // alert("AA");
          // doc.save("test.pdf");
          window.open(doc.output("bloburl"));
        },
      }
    );
  });
};
export { Generate_contract_Pdf };

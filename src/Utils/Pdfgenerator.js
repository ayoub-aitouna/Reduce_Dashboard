const pdf = require("html-pdf");
const { Pdf_contract_template } = require("./Templates.js");

const Generate_contract_Pdf = async (partner_data) => {
  const { content } = Pdf_contract_template(partner_data);
  return new Promise((res, rej) => {
    const path = `./temp/contracr_${partner_data.id}_Result.pdf`;
    try {
      pdf
        .create(content, {})
        .toFile(path, async (err) => {
            if (err) 
                return rej({ msg: err });
            fs.unlinkSync(path);
            res(path);
        });
    } catch (err) {
        rej(err);
    }
  });
};

export { Generate_contract_Pdf };
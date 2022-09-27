import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = (value) => {
  const buff = Buffer.from(value, "base64");
  return buff.toString("ascii");
};

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[9];
    const data = JSON.parse(req.body);

    const newData = {
      ...data,
      Status: "Verificar",
      Data: moment().format("DD/MM/YYYY HH:mm:ss"),
    };

    await sheet.addRow(newData);

    res.end(
      JSON.stringify({
        status: true,
        mensagem: "Dados enviados com sucesso!",
      })
    );
  } catch (e) {
    res.end(
      JSON.stringify({
        status: false,
        mensagem: "Não foi possível enviar!",
      })
    );
  }
};

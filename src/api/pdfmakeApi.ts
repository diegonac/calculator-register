import * as pdfMake from "pdfmake/build/pdfmake";
// En desarrollo:
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// En producción:
// import "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { capitalizeWords, showDate } from "../utils/dataUtils";
import { SumsHooks } from "../models/sums.models";

// En desarrollo:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (
  sums: SumsHooks["sums"],
  total: SumsHooks["total"],
  saleCondition: string,
  client: string
) => {

  const products = sums.map((sum) => `${sum.product}`);
  const amounts = sums.map((sum) => `${sum.amount}`);
  const price = sums.map((sum) => `${sum.price}`);
  const subTotal = sums.map((sum) => `${sum.price * sum.amount}`);
  products.unshift("PRODUCTOS");
  amounts.unshift("UNIDADES");
  price.unshift("PRECIO");
  subTotal.unshift("SUBTOTAL");


  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: showDate(), style: "date" },
      { text: "Detalle:", style: "title" },
      { text: `Cliente: ${capitalizeWords(client)}`, style: "info" },
      {
        text: `Condición de la venta: ${saleCondition.toLowerCase()}`,
        style: "info",
      },
      {
        columns: [
          { stack: products, style: "products" },
          { stack: amounts, style: "amount" },
          { stack: price, style: "price" },
          { stack: subTotal, style: "price" },
        ],
      },
      {
        columns: [
          { text: "Total", style: "totalString" },
          { text: `${total()}`, style: "totalNumber" },
        ],
      },
    ],
    styles: {
      title: {
        margin: 15,
        characterSpacing: 1,
        fontSize: 26,
      },
      date: {
        margin: [15, 0],
        fontSize: 14,
      },
      info: {
        margin: 15,
        characterSpacing: 1,
        fontSize: 14,
      },
      products: {
        margin: [0, 15],
        alignment: "left",
        characterSpacing: 1,
        fontSize: 16,
      },
      amount: {
        margin: [0, 15],
        alignment: "center",
        characterSpacing: 1,
        fontSize: 16,
      },
      price: {
        margin: [0, 15],
        alignment: "right",
        characterSpacing: 1,
        fontSize: 16,
      },
      totalString: {
        margin: [0, 15],
        alignment: "left",
        characterSpacing: 1,
        fontSize: 23,
      },
      totalNumber: {
        margin: [0, 15],
        alignment: "right",
        characterSpacing: 1,
        fontSize: 23,
      },
    },
  };

  pdfMake
    .createPdf(docDefinition)
    .download(`${showDate()} - ${capitalizeWords(client)}`);
};

export default generatePDF;

import * as pdfMake from "pdfmake/build/pdfmake";
// En desarrollo:
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// En producción:
import "pdfmake/build/vfs_fonts";
import { prepareBody, capitalizeWords } from "../../utils/dataUtils";
import createDocDefinition from "./docDefinition";
import { BodyDocDefinition, Order } from "../../types/sums.models";

// En desarrollo:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

const generatePdf = (order: Order) => {

  const infoSums = prepareBody(order.sums);

  const body: BodyDocDefinition = {
    ...infoSums,
    client: order.client,
    saleCondition: order.saleCondition,
    total: order.total.toString(),
  };

  const docDefinition = createDocDefinition(body);

  pdfMake.createPdf(docDefinition).download(`${order.date} - ${capitalizeWords(order.client)}`);
};

export default generatePdf;

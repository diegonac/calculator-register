import * as pdfMake from "pdfmake/build/pdfmake";
// En desarrollo:
import * as pdfFonts from "pdfmake/build/vfs_fonts";
// En producción:
// import "pdfmake/build/vfs_fonts";
import { prepareBody } from "../../utils/dataUtils";
import createDocDefinition from "./docDefinition";
import { BodyDocDefinition, SumsHooks } from "../../types/sums.models";

// En desarrollo:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

const generatePdf = (
  sums: SumsHooks["sums"],
  total: string,
  saleCondition: string,
  client: string
) => {

  const infoSums = prepareBody(sums);

  const body: BodyDocDefinition = {
    ...infoSums,
    client,
    saleCondition,
    total,
  };

  const docDefinition = createDocDefinition(body);

  pdfMake.createPdf(docDefinition).open();
};

export default generatePdf;

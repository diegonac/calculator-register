import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { SumsHooks } from '../models/sums.models';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (sums: SumsHooks["sums"], total: SumsHooks["total"]) => {
    if(sums) {
        const docDefinition: TDocumentDefinitions = {
            content: [
                { text: "Detalle:", fontSize: 20},
                { ul: sums.map(sum => ([`${sum.product}: $${sum.amount}`])) },
                { text: `Total: $` + total(), fontSize: 18 }
            ],
        };
    
        pdfMake.createPdf(docDefinition).open();
    }
};

export default generatePDF;
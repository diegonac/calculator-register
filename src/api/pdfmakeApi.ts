import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { showDate } from '../utils/dataUtils';
import { SumsHooks } from '../models/sums.models';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (sums: SumsHooks["sums"], total: SumsHooks["total"]) => {
    
    if(sums) {
        const docDefinition: TDocumentDefinitions = {
            content: [
                { text: showDate(), style: "date" },
                { text: "Detalle:", style: "title"},
                { columns: [ { stack: sums.map(sum => ([`${sum.product} $${sum.amount}`])), style: "list" } ] },
                { text: `Total: $` + total(), style: "total" }
            ],
            styles: {
                title: {
                    margin: 15,
                    characterSpacing: 1,
                    fontSize: 35,
                },
                date: {
                    margin: [15, 0],
                    fontSize: 14,
                },
                list: {
                    margin: 15,
                    alignment: "center",
                    characterSpacing: 1,
                    fontSize: 23,
                },
                total: {
                    margin: 15,
                    characterSpacing: 1,
                    fontSize: 30,
                }
            }
        };
    
        pdfMake.createPdf(docDefinition).open();
    }
};

export default generatePDF;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { capitalizeWords, showDate } from '../utils/dataUtils';
import { SumsHooks } from '../models/sums.models';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (sums: SumsHooks["sums"], total: SumsHooks["total"], saleCondition: string, client: string) => {
    
    const docDefinition: TDocumentDefinitions = {
        content: [
            { text: showDate(), style: "date" },
            { text: "Detalle:", style: "title"},
            { text: `Cliente: ${capitalizeWords(client)}`, style: "info"},
            { text: `Condición de la venta: ${saleCondition.toLowerCase()}`, style: "info"},
            { columns: [ 
                { stack: sums.map(sum => ([`${sum.product}`])), style: "products" }, 
                { stack: sums.map(sum => ([`$${sum.amount}`])), style: "amounts" }
            ] },
            { columns: [ {text: "Total", style: "total"}, {text: `$${total()}`, style: "amounts"} ] }
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
                margin: 15,
                alignment: "left",
                characterSpacing: 1,
                fontSize: 23,
            },
            amounts: {
                margin: 15,
                alignment: "right",
                characterSpacing: 1,
                fontSize: 23,
            },
            total: {
                margin: 15,
                characterSpacing: 1,
                fontSize: 23,
            }
        }
    };

    pdfMake.createPdf(docDefinition).download();

};

export default generatePDF;
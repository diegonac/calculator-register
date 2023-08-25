import React, { ChangeEvent, useRef, useState } from "react";
import { BodySendEmail, SumsHooks } from "../types/sums.models";
import generatePdf from "../api/pdfmake/pdfmakeApi";
import { prepareBody, showMsg } from "../utils/dataUtils";
import sendPDFService from "../services/sendPDF.service";
import { validateEmail } from "../utils/validationUtils";

const service = new sendPDFService();

interface DetailsButtonsProps {
  sums: SumsHooks["sums"];
  total: SumsHooks["total"];
  selectedSaleCondition: string;
  client: string;
  showDetails: boolean;
  toggleShowDetails: () => void;
  deleteSums: () => void;
}

const DetailsButtons: React.FC<DetailsButtonsProps> = ({
  sums,
  total,
  selectedSaleCondition,
  client,
  showDetails,
  toggleShowDetails,
  deleteSums,
}) => {
  const [emailClient, setEmailClient] = useState<string>("");
  const msgLayout = useRef<HTMLParagraphElement>(null);

  const handleDownloadPdf = () => {
    const totalSum = total().toString();
    generatePdf(sums, totalSum, selectedSaleCondition, client);
  };

  const handleSendPdf = async () => {
    showMsg(msgLayout, "");
    try {
      showMsg(msgLayout, "Enviando...");
      const isValidateEmail = validateEmail(emailClient);
      if(!isValidateEmail) {
        showMsg(msgLayout, "Email inválido", 2);
        return null;
      }
      const infoSums = prepareBody(sums);
      const body: BodySendEmail = {
        ...infoSums,
        saleCondition: selectedSaleCondition,
        client,
        email: emailClient,
        total: total().toString(),
      }
      await service.send(body);
      showMsg(msgLayout, "Email enviado", 1);
    } catch (error) {
      console.log(error);
      showMsg(msgLayout, "Error al enviar el email", 2);
      throw error;
    }
  };

  const changeEmailClient = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailClient(event.target.value);
  };

  const handleDeleteSum = () => {
    const deleteSum: boolean = confirm("¿Quiere eliminar la suma?");
    if (deleteSum) deleteSums();
    showMsg(msgLayout, "");
    setEmailClient("");
  };

  return (
    <div className="contain-buttons-layout">
      <button
        title={showDetails ? "Ocultar detalle" : "Ver detalle"}
        type="button"
        onClick={toggleShowDetails}
      >
        {showDetails ? "Ocultar detalle" : "Ver detalle"}
      </button>
      <button title="PDF" type="button" onClick={handleDownloadPdf}>
        Descargar PDF
      </button>
      <button title="Eliminar suma" type="button" onClick={handleDeleteSum}>
        Eliminar suma
      </button>
      <h3>¿Quiere enviar el detalle al cliente?</h3>
      <span>Ingrese el email del cliente</span>
      <input
        type="email"
        name="email"
        id="email-client"
        value={emailClient}
        onChange={changeEmailClient}
      />
      <p ref={msgLayout}></p>
      <button title="PDF" type="button" onClick={handleSendPdf}>
        Enviar PDF
      </button>
    </div>
  );
};

export default DetailsButtons;
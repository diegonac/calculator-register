import React, { ChangeEvent, useState } from "react";
import { dowloadPDF, sendPDF } from "../api/pdfmakeApi";
import { SumsHooks } from "../models/sums.models";
import { validateEmail } from "../utils/validationUtils";

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

  const handleDownloadPDF = () => {
    dowloadPDF(sums, total, selectedSaleCondition, client);
  };

  const handleSendPDF = () => {
    const isValidateEmail = validateEmail(emailClient);
    if(isValidateEmail) sendPDF(sums, total, selectedSaleCondition, client, emailClient);
  };

  const changeEmailClient = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailClient(event.target.value);
  };

  const handleDeleteSum = () => {
    const deleteSum: boolean = confirm("¿Quiere eliminar la suma?");
    if (deleteSum) deleteSums();
    const msgLayout = document.getElementById("msg-layout");
    if (msgLayout) {
      msgLayout.textContent = "";
    }
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
      <button title="PDF" type="button" onClick={handleDownloadPDF}>
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
      <p id="msg-layout"></p>
      <button title="PDF" type="button" onClick={handleSendPDF}>
        Enviar PDF
      </button>
    </div>
  );
};

export default DetailsButtons;

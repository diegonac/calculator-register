import React, { ChangeEvent, useRef, useState } from "react";
import Details from "./Details";
import generatePdf from "../api/pdfmake/pdfmakeApi";
import { showMsg } from "../utils/dataUtils";
import SendEmail from "./SendEmail";
import useSumsContext from "../hooks/useSumsContext";
import useSums from "../hooks/useSums";
import "../assets/actionButtons.css";

const ActionButtons: React.FC = () => {
  const { order } = useSumsContext();

  const { deleteAllSums } = useSums();

  const [email, setEmail] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const emailStatusMsg = useRef<HTMLParagraphElement>(null);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleDownloadPdf = () => {
    const totalSum = order.total.toString();
    generatePdf(order.sums, totalSum, order.saleCondition, order.client);
  };

  const handleDeleteSum = () => {
    const deleteSum: boolean = confirm("¿Quiere eliminar la suma?");
    if (deleteSum) deleteAllSums();
    showMsg(emailStatusMsg, "");
    setEmail("");
  };

  return (
    <div className="container-buttons-layout">
      <button
        title={showDetails ? "Ocultar detalle" : "Ver detalle"}
        type="button"
        onClick={toggleShowDetails}
      >
        {showDetails ? "Ocultar detalle" : "Ver detalle"}
      </button>
      {showDetails && <Details />}
      <button title="PDF" type="button" onClick={handleDownloadPdf}>
        Descargar PDF
      </button>
      <button title="Eliminar suma" type="button" onClick={handleDeleteSum}>
        Eliminar suma
      </button>
      <SendEmail email={email} onChange={handleChangeEmail} emailStatusMsg={emailStatusMsg} />
    </div>
  );
};

export default ActionButtons;

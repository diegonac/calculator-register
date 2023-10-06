import React, { ChangeEvent, useRef, useState } from "react";
import Details from "./Details";
import generatePdf from "../api/pdfmake/pdfmakeApi";
import { showMsg } from "../utils/dataUtils";
import SendEmail from "./SendEmail";
import useSumsContext from "../hooks/useSumsContext";
import useSums from "../hooks/useSums";

const ActionButtons: React.FC = () => {
  const { order, setSelectedProduct } = useSumsContext();

  const containerDetails = useRef<HTMLDivElement>(null);

  const { deleteAllSums } = useSums();

  const [email, setEmail] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const emailStatusMsg = useRef<HTMLParagraphElement>(null);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
    if(!showDetails) {
      containerDetails.current?.setAttribute("style", "display: block");
      updateScrollFocus();
    } else {
      containerDetails.current?.removeAttribute("style");
    }
  };

  const handleDownloadPdf = () => {
    generatePdf(order);
  };

  const handleDeleteSum = () => {
    const deleteSum: boolean = confirm("¿Quiere eliminar la suma?");
    if (deleteSum) deleteAllSums();
    showMsg(emailStatusMsg, "");
    setEmail("");
    setSelectedProduct("");
  };

  const updateScrollFocus = () => {
    if (containerDetails.current) {
      containerDetails.current.scrollIntoView({ behavior: "smooth" });
    }
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
      <Details containerDetails={containerDetails} />
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

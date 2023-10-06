import React, { ChangeEvent } from "react";
import { BodySendEmail } from "../types/sums.models";
import sendPDFService from "../services/sendPDF.service";
import { prepareBody, showMsg } from "../utils/dataUtils";
import { validateEmail } from "../utils/validationUtils";
import useSumsContext from "../hooks/useSumsContext";

const service = new sendPDFService();

interface SendEmailProps {
  email: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  emailStatusMsg: React.RefObject<HTMLParagraphElement>;
}

const SendEmail: React.FC<SendEmailProps> = ({ email, onChange, emailStatusMsg, }) => {
  const { order } = useSumsContext();

  const handleSendPdf = async () => {
    showMsg(emailStatusMsg, "");
    try {
      showMsg(emailStatusMsg, "Enviando...");
      const isValidateEmail = validateEmail(email);
      if (!isValidateEmail) {
        showMsg(emailStatusMsg, "Email inválido", 2);
        return null;
      }
      const infoSums = prepareBody(order.sums);
      const body: BodySendEmail = {
        ...infoSums,
        saleCondition: order.saleCondition,
        client: order.client,
        email: email,
        total: order.total.toString(),
      };
      await service.send(body);
      showMsg(emailStatusMsg, "Email enviado", 1);
    } catch (error) {
      console.log(error);
      showMsg(emailStatusMsg, "Error al enviar el email", 2);
      throw error;
    }
  };

  return (
    <>
      <h3>¿Quiere enviar el detalle al cliente?</h3>
      <span>Ingrese el email del cliente</span>
      <input
        type="email"
        name="email"
        id="email-client"
        value={email}
        onChange={onChange}
      />
      <p ref={emailStatusMsg}></p>
      <button title="PDF" type="button" onClick={handleSendPdf}>
        Enviar PDF
      </button>
    </>
  );
};

export default SendEmail;

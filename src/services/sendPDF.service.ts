import axios from "axios";
import config from "../config/config";

class sendPDFService {
  async send(pdfFile: File, email: string, nameFile: string) {
    const msgLayout = document.getElementById("msg-layout");
    if(msgLayout) msgLayout.textContent = "Enviando...";
    try {
      const formData = new FormData();
      formData.append("pdf", pdfFile);
      const response = await axios.post(
        config.db_Url,
        formData,
        {
          params: { email, nameFile },
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if(msgLayout) {
        msgLayout.textContent = "Email enviado";
        msgLayout.style.color = "#2b9348";
      }
      return response;
    } catch (error) {
      if(msgLayout) {
        msgLayout.textContent = "No se pudo enviar el email";
        msgLayout.style.color = "#9d0208";
      }
      console.log(error);
      throw error;
    }
  }
}

export default sendPDFService;

import axios from "axios";
import { BodySendEmail } from "../types/sums.models";
import config from "../config/config";

class sendPDFService {
  async send(body: BodySendEmail) {
    const response = await axios.post(config.db_Url, body);
    return response;
  }
}

export default sendPDFService;

import ReactDOM from "react-dom";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => (
  ReactDOM.createPortal(children, document.getElementById("modal")!)
);

export default Modal;
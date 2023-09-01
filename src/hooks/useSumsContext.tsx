import { useContext } from "react";
import { SumsContext } from "../context/SumsContext";

const useSumsContext = () => {
    const context = useContext(SumsContext);
    return context;
}

export default useSumsContext;
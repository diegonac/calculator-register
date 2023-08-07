import React, { useRef } from "react"
import { SumsHooks } from "../models/sums.models";
import "../assets/form.css";

interface FormProps {
    addSum: SumsHooks["addSum"],
}

const Form: React.FC<FormProps> = ({ addSum }) => {
    const sum = useRef<HTMLInputElement>(null);

    const handleAdd = () => {
        if(sum?.current?.value) {
            const newSum: number = parseInt(sum.current.value);
            addSum(newSum);
            sum.current.value = "";
        }
    }
    return (
        <form>
            <input type="number" name="number" ref={sum} />
            <button onClick={handleAdd} type="button">Sumar</button>
        </form>
    )
}

export default Form;

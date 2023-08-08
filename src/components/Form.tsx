import React, { ChangeEvent, useRef } from "react"
import { SumsHooks } from "../models/sums.models";
import "../assets/form.css";

interface FormProps {
    addSum: SumsHooks["addSum"],
}

const Form: React.FC<FormProps> = ({ addSum }) => {
    const sum = useRef<HTMLInputElement>(null);

    const handleAdd = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(sum?.current?.value) {
            const newSum: number = parseInt(sum.current.value);
            addSum(newSum);
            sum.current.value = "";
        }
    }
    
    return (
        <form onSubmit={handleAdd}>
            <span>Escribe tus sumas</span>
            <input type="number" name="number" ref={sum} />
            <button type="submit">Sumar</button>
        </form>
    )
}

export default Form;

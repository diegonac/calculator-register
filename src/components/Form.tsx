import React, { ChangeEvent, useRef, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { SumsHooks } from "../models/sums.models";
import "../assets/form.css";

interface FormProps {
  addSum: SumsHooks["addSum"];
}

const Form: React.FC<FormProps> = ({ addSum }) => {
  const sum = useRef<HTMLInputElement>(null);
  const [amountValue, setAmountValue] = useState<number>(1);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sum?.current?.value) {
      const newSum: number = parseInt(sum.current.value);
      addSum(newSum, amountValue);
      sum.current.value = "";
    }
    setAmountValue(1);
  };

  const addAmount = () => {
    setAmountValue((prev) => prev + 1);
  };

  const removeAmount = () => {
    if (amountValue <= 1) return null;
    setAmountValue((prev) => prev - 1);
  };

  const changeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) < 1) return null;
    setAmountValue(parseInt(event.target.value || "0"));
  };

  const resetAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) setAmountValue(1);
  };

  const updateScrollFocus = () => {
    setTimeout(() => {
      const dropdownProduct = document.querySelector(".products");
      if (dropdownProduct) {
        dropdownProduct.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-units">
        <span>Unidades:</span>
        <div>
          <button title="Quitar unidad" type="button" onClick={removeAmount}>
            <AiOutlineMinusCircle />
          </button>
          <input
            type="number"
            name="amount"
            value={amountValue ? amountValue : ""}
            onChange={changeAmount}
            onBlur={resetAmount}
          />
          <button title="Aumentar unidad" type="button" onClick={addAmount}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      <span>Escribe tu suma</span>
      <input
        type="number"
        name="number"
        ref={sum}
        onFocus={updateScrollFocus}
        onClick={updateScrollFocus}
        className="input-sum"
      />
      <button type="submit">Sumar</button>
    </form>
  );
};

export default Form;

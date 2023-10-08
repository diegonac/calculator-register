import React, { ChangeEvent } from "react";
import myUtilities from "../utils/tw.styles";

interface FormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  sumInput: React.RefObject<HTMLInputElement>;
}

const Sum: React.FC<FormProps> = ({ value, onChange, sumInput }) => {
  const updateScrollFocus = () => {
    setTimeout(() => {
      const dropdownProduct = document.querySelector(".products");
      if (dropdownProduct) {
        dropdownProduct.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div className={myUtilities.containerInput}>
      <input
        type="number"
        name="number"
        ref={sumInput}
        value={value}
        onFocus={updateScrollFocus}
        onClick={updateScrollFocus}
        onChange={onChange}
        className={myUtilities.input}
        placeholder=" "
      />
      <label className={myUtilities.label}>
        Suma
      </label>
    </div>
  );
};

export default Sum;

import React, { ChangeEvent } from "react";

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
    <label className="container-sum">
      <span>Escribe tu suma</span>
      <input
        type="number"
        name="number"
        ref={sumInput}
        value={value}
        onFocus={updateScrollFocus}
        onClick={updateScrollFocus}
        onChange={onChange}
        className="input-sum"
      />
    </label>
  );
};

export default Sum;

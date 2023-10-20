import React, { ChangeEvent } from "react";
import myUtilities from "../utils/tw.styles";

interface FormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  sumInput: React.RefObject<HTMLInputElement>;
  scrollProductDropdown: () => void;
}

const Sum: React.FC<FormProps> = ({ value, onChange, sumInput, scrollProductDropdown }) => {

  return (
    <div className={myUtilities.containerInput}>
      <input
        type="number"
        name="number"
        step="any"
        min="0"
        ref={sumInput}
        value={value}
        onFocus={scrollProductDropdown}
        onClick={scrollProductDropdown}
        onChange={onChange}
        className={myUtilities.input}
        placeholder=" "
        id="sum-input"
      />
      <label className={myUtilities.label}>
        Suma
      </label>
    </div>
  );
};

export default Sum;

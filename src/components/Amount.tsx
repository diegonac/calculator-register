import React, { useRef, ChangeEvent, Dispatch, SetStateAction } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface AmountProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const Amount:React.FC<AmountProps> = ({ value, setValue }) => {
  const amountRef = useRef<HTMLInputElement>(null);

  const addAmount = () => {
    setValue((prev) => prev + 1);
  };

  const removeAmount = () => {
    if (value <= 1) return null;
    setValue((prev) => prev - 1);
  };

  const changeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(event.target.value) < 1) return null;
    setValue(parseInt(event.target.value || "0"));
  };

  const resetAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) setValue(1);
  };

  const focusAmount = () => {
    amountRef.current?.select();
  };
  return (
    <div className="container-units">
      <span>Unidades:</span>
      <div>
        <button title="Quitar unidad" type="button" onClick={removeAmount}>
          <AiOutlineMinusCircle />
        </button>
        <input
          type="number"
          name="amount"
          value={value ? value : ""}
          onFocus={focusAmount}
          onChange={changeAmount}
          onBlur={resetAmount}
          ref={amountRef}
        />
        <button title="Aumentar unidad" type="button" onClick={addAmount}>
          <AiOutlinePlusCircle />
        </button>
      </div>
    </div>
  );
}

export default Amount;
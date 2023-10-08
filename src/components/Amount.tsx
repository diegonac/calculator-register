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
    <div>
      <span className="block text-center">Unidades</span>
      <div className="flex justify-center">
        <button className="w-11 flex justify-center items-center" title="Quitar unidad" type="button" onClick={removeAmount}>
          <AiOutlineMinusCircle />
        </button>
        <input
          className="py-2.5 px-0 text-sm text-gray-900 text-center w-8 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="number"
          name="amount"
          value={value ? value : ""}
          onFocus={focusAmount}
          onChange={changeAmount}
          onBlur={resetAmount}
          ref={amountRef}
        />
        <button className="w-11 flex justify-center items-center" title="Aumentar unidad" type="button" onClick={addAmount}>
          <AiOutlinePlusCircle />
        </button>
      </div>
    </div>
  );
}

export default Amount;
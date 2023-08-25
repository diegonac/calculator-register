import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { Sum, SumsHooks } from "../types/sums.models";
import "../assets/items.css";

interface ItemsProps {
  sum: Sum;
  removeSum: SumsHooks["removeSum"];
  addAmount: SumsHooks["addAmount"];
  removeAmount: SumsHooks["removeAmount"];
}

const Items: React.FC<ItemsProps> = ({
  sum,
  removeSum,
  addAmount,
  removeAmount,
}) => {
  const handleDelete = () => {
    removeSum(sum);
  };

  const handleAddAmount = () => {
    addAmount(sum);
  };

  const handleRemoveAmount = () => {
    removeAmount(sum);
  };
  return (
    <>
      <p>{sum.product}</p>
      <p>{sum.price}</p>

      <div className="container-item__amount">
        <button
          title="Eliminar unidad"
          type="button"
          onClick={handleRemoveAmount}
          className="button-unit__remove"
        >
          <AiOutlineMinusCircle />
        </button>
        <p>{sum.amount}</p>
        <button
          title="Agregar unidad"
          type="button"
          onClick={handleAddAmount}
          className="button-unit__add"
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      <p>{sum.price * sum.amount}</p>
      
      <button
        title="Eliminar suma"
        type="button"
        className="container-item__delete-sum"
        onClick={handleDelete}
      >
        <BsTrash3 />
      </button>
    </>
  );
};

export default Items;

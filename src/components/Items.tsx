import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { Sum, SumsHooks } from "../models/sums.models";

interface ItemsProps {
  sum: Sum;
  removeSum: SumsHooks["removeSum"];
  addAmount: SumsHooks["addAmount"];
  removeAmount: SumsHooks["removeAmount"];
}

const Items: React.FC<ItemsProps> = ({ sum, removeSum, addAmount, removeAmount }) => {
  const handleDelete = () => {
    removeSum(sum);
  };
  const handleAddAmount = () => {
    addAmount(sum);
  }
  const handleRemoveAmount = () => {
    removeAmount(sum);
  }
  return (
    <>
    <button title="Eliminar suma" type="button" className="container-item__delete-sum" onClick={handleDelete}><BsTrash3 /></button>
      {sum.product && 
      <div>
        <p>{sum.product}</p>
        </div>}
      <div>
        <p>{sum.price}</p>
      </div>
      <div>
        <div className="container-item__buttons">
          <button title="Eliminar unidad" type="button" onClick={handleRemoveAmount} className="button-unit__remove">
            <AiOutlineMinusCircle />
          </button>
          <button title="Agregar unidad" type="button" onClick={handleAddAmount} className="button-unit__add">
            <AiOutlinePlusCircle />
          </button>
        </div>
        <p>{sum.amount}</p>
      </div>
      <div>
        <p>{sum.price * sum.amount}</p>
      </div>
    </>
  );
};

export default Items;

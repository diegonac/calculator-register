import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Sum, SumsHooks } from '../models/sums.models';

interface ItemsProps {
    sum: Sum,
    removeSum: SumsHooks["removeSum"],
}

const Items: React.FC<ItemsProps> = ({ sum, removeSum }) => {
    const handleDelete = () => {
        removeSum(sum);
    }
    return (
        <>
            { sum.product && <p>{ sum.product }</p> }
            <p>${ sum.amount }</p>
            <button title='Eliminar' type='button' onClick={handleDelete}>
                <AiOutlineCloseCircle />
            </button>
        </>
    )
}

export default Items;
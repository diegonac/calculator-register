import { useState } from 'react';
import { SumsHooks, SetSumsProps, Sum, SumType } from '../models/sums.models';

const useSums = (sums: SumsHooks["sums"], setSums: SetSumsProps, selectedProduct: string): SumsHooks => {
    const [id, setId] = useState<number>(0);

    const addSum = (amount: SumType) => {
        setId(prev => prev + 1);
        setSums((prev: SumsHooks["sums"]) => [...prev, { id, amount, product: selectedProduct} ]);
    }

    const removeSum = (sum: Sum) => {
        const newSums = sums.filter(item => item.id !== sum.id);
        setSums([...newSums]);
    }

    const total = (): number => {
        let resultado = 0;
        sums.forEach(sum => {
            if(sum) {
                resultado = resultado + sum.amount;
            }
        })
        return resultado;
    }
    return {
        sums,
        addSum,
        removeSum,
        total,
    }
}

export default useSums;
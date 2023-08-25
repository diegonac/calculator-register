import { useState } from "react";
import { SumsHooks, SetSumsProps, Sum, SumType } from "../types/sums.models";

const useSums = (
  sums: SumsHooks["sums"],
  setSums: SetSumsProps,
  selectedProduct: string
): SumsHooks => {
  const [id, setId] = useState<number>(0);

  const addSum = (price: SumType, amount: SumType = 1) => {
    setId((prev) => prev + 1);
    setSums((prev: SumsHooks["sums"]) => [
      ...prev,
      { id, price, amount, product: selectedProduct },
    ]);
  };

  const addAmount = (sum: Sum) => {
    const updateSum = sums.filter((item) => item.id === sum.id);
    updateSum[0].amount = updateSum[0].amount + 1;
    setSums((prev: SumsHooks["sums"]) => [...prev]);
  }

  const removeAmount = (sum: Sum) => {
    const updateSum = sums.filter((item) => item.id === sum.id);
    updateSum[0].amount = updateSum[0].amount - 1;
    setSums((prev: SumsHooks["sums"]) => [...prev]);
  }

  const removeSum = (sum: Sum) => {
      const newSums = sums.filter((item) => item.id !== sum.id);
      setSums([...newSums]);
  };

  const total = (): number => {
    let resultado = 0;
    sums.forEach((sum) => {
      resultado = resultado + sum.price * sum.amount;
    });
    return resultado;
  };
  return {
    sums,
    addSum,
    removeSum,
    addAmount,
    removeAmount,
    total,
  };
};

export default useSums;

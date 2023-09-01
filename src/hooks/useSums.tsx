import { useState } from "react";
import { SumsHooks, Sum } from "../types/sums.models";
import { showDate } from "../utils/dataUtils";
import useSumsContext from "./useSumsContext";

const useSums = (): SumsHooks => {
  const { order, setOrder } = useSumsContext();

  const [id, setId] = useState<number>(0);

  const addSum = (sum: Omit<Sum, "id">) => {
    setId((prev) => prev + 1);
    const newSum = { ...sum, id };
    setOrder((prev) => ({ ...prev, sums: [...prev.sums, newSum], total: total([...prev.sums, newSum]) }));
  };

  const removeSum = (sum: Sum) => {
    const newSums = order.sums.filter((item) => item.id !== sum.id);
    setOrder((prev) => ({ ...prev, sums: [...newSums], total: total([...newSums]) }));
  };

  const addAmount = (sum: Sum) => {
    const updateSum = order.sums.filter((item) => item.id === sum.id);
    updateSum[0].amount = updateSum[0].amount + 1;
    setOrder((prev) => ({ ...prev, total: total(prev.sums) }));
  };

  const removeAmount = (sum: Sum) => {
    const updateSum = order.sums.filter((item) => item.id === sum.id);
    if(updateSum[0].amount === 1) return;
    updateSum[0].amount = updateSum[0].amount - 1;
    setOrder((prev) => ({ ...prev, total: total(prev.sums) }));
  };

  const deleteAllSums = () => {
    setOrder({
      date: showDate(),
      client: "",
      saleCondition: "",
      sums: [],
      total: 0,
    });
  };

  return {
    addSum,
    removeSum,
    addAmount,
    removeAmount,
    deleteAllSums,
  };
};

export default useSums;

const total = (sums: Sum[]): number => {
  let resultado = 0;
  sums.forEach((sum) => {
    resultado = resultado + parseInt(sum.price) * sum.amount;
  });
  return resultado;
};
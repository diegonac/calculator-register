import { Dispatch, SetStateAction } from "react";

export type SumType = number;

export type Sum = { id: number, amount: SumType, product: string };

export interface SumsHooks extends Sums {
    addSum: (sum: SumType) => void,
    removeSum: (sum: Sum) => void,
    total: () => number,
}

export interface Sums {
    sums: Sum[],
}

export type SetSumsProps = Dispatch<SetStateAction<SumsHooks["sums"]>>;
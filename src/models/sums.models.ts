import { Dispatch, SetStateAction } from "react";

export type SumType = number;

export type Sum = { id: number, amount: SumType, price: SumType, product: string };

export interface SumsHooks extends Sums {
    addSum: (price: SumType, amount: SumType) => void,
    removeSum: (sum: Sum) => void,
    addAmount: (sum: Sum) => void,
    removeAmount: (sum: Sum) => void,
    total: () => number,
}

export interface Sums {
    sums: Sum[],
}

export type SetSumsProps = Dispatch<SetStateAction<SumsHooks["sums"]>>;

export interface dropdownMsg {
    [key: string]: string,
}

export interface dropdownOptions {
    name: string,
    list: string[],
}
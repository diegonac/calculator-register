import { Dispatch, SetStateAction } from "react";

export type SumType = number;

export type Sum = {
  id: number;
  amount: SumType;
  price: SumType;
  product: string;
};

export interface SumsHooks extends Sums {
  addSum: (price: SumType, amount: SumType) => void;
  removeSum: (sum: Sum) => void;
  addAmount: (sum: Sum) => void;
  removeAmount: (sum: Sum) => void;
  total: () => number;
}

export interface Sums {
  sums: Sum[];
}

export type SetSumsProps = Dispatch<SetStateAction<SumsHooks["sums"]>>;

export interface DropdownMsg {
  [key: string]: string;
}

export interface DropdownOptions {
  name: string;
  list: string[];
}

export interface BodyDocDefinition {
  amounts: string[];
  client: string;
  prices: string[];
  products: string[];
  saleCondition: string;
  subTotal: string[];
  total: string;
}

export interface BodySendEmail extends BodyDocDefinition {
  email: string,
}

import { Dispatch, SetStateAction } from "react";

export type SumType = number;

export type Sum = {
  id: number;
  amount: SumType;
  price: string;
  product: string;
};

export interface SumsHook {
  addSum: (sum: Omit<Sum, "id">) => void;
  removeSum: (sum: Sum) => void;
  addAmount: (sum: Sum) => void;
  removeAmount: (sum: Sum) => void;
  deleteAllSums: () => void;
}

export type Sums = Sum[];

export type SetSumsProps = Dispatch<SetStateAction<Sums>>;

export interface DropdownMsg {
  [key: string]: string;
}

export type Option = {concept: string, id: number};

export interface DropdownOptions {
  name: string;
  list: Option[];
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

export enum CATEGORIES {
  PRODUCTS = "products",
  SALE_CONDITION = "saleCondition",
}
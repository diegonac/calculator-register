export type Sum = {
  id: number;
  amount: number;
  price: string;
  product: string;
};

export type Sums = Sum[];

export type Order = {
  date: string;
  client: string;
  saleCondition: string;
  sums: [] | Sums;
  total: number;
};

export interface DropdownMsg {
  [key: string]: string;
}

export type Option = { concept: string; id: number };

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
  email: string;
}

export enum CATEGORIES {
  PRODUCTS = "products",
  SALE_CONDITION = "saleCondition",
}

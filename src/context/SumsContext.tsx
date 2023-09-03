import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { productsDefault, saleConditionDefault, showDate } from "../utils/dataUtils";
import { CATEGORIES, DropdownOptions, Order } from "../types/sums.models";

const productsStorage: DropdownOptions | null = JSON.parse(localStorage.getItem(CATEGORIES.PRODUCTS) || "null");
const saleConditionStorage: DropdownOptions | null = JSON.parse(localStorage.getItem(CATEGORIES.SALE_CONDITION) || "null");

if(!productsStorage) {
  localStorage.setItem(CATEGORIES.PRODUCTS, JSON.stringify(productsDefault));
}
if(!saleConditionStorage) {
  localStorage.setItem(CATEGORIES.SALE_CONDITION, JSON.stringify(saleConditionDefault));
}

export const SumsContext = createContext<ISumsContext>({} as ISumsContext);

interface SumsProviderProps {
  children: ReactNode;
}

export const SumsProvider: React.FC<SumsProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Order>({
    date: showDate(),
    client: "",
    saleCondition: "",
    sums: [],
    total: 0,
  });

  const [productsOptions, setProductsOptions] = useState<DropdownOptions>(productsStorage || productsDefault);
  const [saleConditionOptions, setSaleConditionOptions] = useState<DropdownOptions>(saleConditionStorage || saleConditionDefault);
  
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  return (
    <SumsContext.Provider
      value={{
        order,
        productsOptions,
        saleConditionOptions,
        selectedProduct,
        setOrder,
        setProductsOptions,
        setSaleConditionOptions,
        setSelectedProduct,
      }}
    >
      {children}
    </SumsContext.Provider>
  );
};

interface ISumsContext {
  order: Order;
  productsOptions: DropdownOptions;
  saleConditionOptions: DropdownOptions;
  selectedProduct: string;
  setOrder: Dispatch<SetStateAction<Order>>;
  setProductsOptions: Dispatch<SetStateAction<DropdownOptions>>;
  setSaleConditionOptions: Dispatch<SetStateAction<DropdownOptions>>;
  setSelectedProduct: Dispatch<SetStateAction<string>>;
}

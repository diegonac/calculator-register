import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { showDate } from "../utils/dataUtils";
import { Sum } from "../types/sums.models";

type Order = {
  date: string;
  client: string;
  saleCondition: string;
  sums: [] | Sum[];
  total: number;
};

interface SumsProviderProps {
  children: ReactNode;
}

interface ISumsContext {
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
}

export const SumsContext = createContext<ISumsContext>({} as ISumsContext);

export const SumsProvider: React.FC<SumsProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Order>({
    date: showDate(),
    client: "",
    saleCondition: "",
    sums: [],
    total: 0,
  });
  return (
    <SumsContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </SumsContext.Provider>
  );
};

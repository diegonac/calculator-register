import { DropdownMsg, DropdownOptions, SumsHooks } from "../types/sums.models";

export const capitalizeString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeWords = (str: string): string => {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};

export const showDate = (): string => {
  const currentDate: Date = new Date();
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate: string = currentDate.toLocaleDateString(
    "es",
    optionsDate
  );

  return capitalizeString(formattedDate);
};

export const products: DropdownOptions = {
  name: "products",
  list: [
    "Camisa",
    "Remera",
    "Short",
    "Pantalón",
    "Ropa interior",
    "Calzado",
    "Accesorio",
    "Blanquería",
    "Marroquinería",
    "Perfume",
  ],
};

export const saleCondition: DropdownOptions = {
  name: "saleCondition",
  list: ["Efectivo", "Cuenta corriente", "Tarjeta", "Billetera virtual"],
};

export const dropdownMsgOptions: DropdownMsg = {
  products: "Elige un producto",
  saleCondition: "Elige la condición de la venta",
};

export const showDropdownMsg = (option: string): string => {
  return dropdownMsgOptions[option];
};

export const prepareBody = (sums: SumsHooks["sums"]) => {
  const amounts = sums.map((sum) => `${sum.amount}`);
  const prices = sums.map((sum) => `${sum.price}`);
  const products = sums.map((sum) => `${sum.product}`);
  const subTotal = sums.map((sum) => `${sum.price * sum.amount}`);
  amounts.unshift("UNIDADES");
  prices.unshift("PRECIO");
  products.unshift("PRODUCTOS");
  subTotal.unshift("SUBTOTAL");
  return {
    amounts,
    prices,
    products,
    subTotal,
  };
};

export const showMsg = (
  element: React.RefObject<HTMLParagraphElement>,
  msg: string,
  option: number = 0
) => {
  if (element.current) {
    element.current.textContent = msg;
    if (option === 1) {
      element.current.setAttribute("style", "color: #2b9348");
    } else if (option === 2) {
      element.current.setAttribute("style", "color: #9d0208");
    } else {
      element.current.removeAttribute("style");
    }
  }
};

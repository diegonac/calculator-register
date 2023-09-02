import { CATEGORIES, DropdownMsg, DropdownOptions, Sums } from "../types/sums.models";

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

export const productsDefault: DropdownOptions = {
  name: CATEGORIES.PRODUCTS,
  list: [
    { concept: "Camisa", id: 1 },
    { concept: "Remera", id: 2 },
    { concept: "Short", id: 3 },
    { concept: "Pantalón", id: 4 },
    { concept: "Ropa interior", id: 5 },
    { concept: "Calzado", id: 6 },
    { concept: "Accesorio", id: 7 },
    { concept: "Blanquería", id: 8 },
    { concept: "Marroquinería", id: 9 },
    { concept: "Perfume", id: 10 },
  ],
};

export const saleConditionDefault: DropdownOptions = {
  name: CATEGORIES.SALE_CONDITION,
  list: [
    { concept: "Efectivo", id: 1 },
    { concept: "Cuenta corriente", id: 2 },
    { concept: "Tarjeta", id: 3 },
    { concept: "Billetera virtual", id: 4 },
  ],
};

export const dropdownMsgOptions: DropdownMsg = {
  products: "Elige un producto",
  saleCondition: "Elige la condición de la venta",
};

export const showDropdownMsg = (option: string): string => {
  return dropdownMsgOptions[option];
};

export const prepareBody = (sums: Sums) => {
  const amounts = sums.map((sum) => `${sum.amount}`);
  const prices = sums.map((sum) => `${sum.price}`);
  const products = sums.map((sum) => `${sum.product}`);
  const subTotal = sums.map((sum) => `${parseInt(sum.price) * sum.amount}`);
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

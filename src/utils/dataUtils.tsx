import { dropdownMsg, dropdownOptions } from "../models/sums.models";

export const capitalizeString = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const capitalizeWords = (str: string):string => {
    return str.toLowerCase().replace(/\b\w/g, match => match.toUpperCase());
}

export const showDate = (): string => {
    const currentDate: Date = new Date();
    const optionsDate: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = currentDate.toLocaleDateString("es", optionsDate);

    return capitalizeString(formattedDate);
}

export const products: dropdownOptions = {
    name: "products",
    list: ["Camisa", "Remera", "Short", "Pantalón", "Ropa interior", "Calzado", "Accesorio", "Blanquería", "Marroquinería", "Perfume"],
};

export const saleCondition: dropdownOptions = {
    name: "saleCondition",
    list: ["Efectivo", "Cuenta corriente", "Tarjeta", "Billetera virtual"],
};

export const dropdownMsgOptions: dropdownMsg = {
    products: "Elige un producto",
    saleCondition: "Elige la condición de la venta",
};

export const showDropdownMsg = (option: string): string => {
    return dropdownMsgOptions[option];
}
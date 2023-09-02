import { Dispatch, SetStateAction } from "react";
import { CATEGORIES, DropdownOptions, Option } from "../types/sums.models";
import useSumsContext from "./useSumsContext";

interface OptionsHook {
  addOption: (category: string, body: Option) => void;
  removeOption: (category: string, id: number) => void;
}

const useOptions = (): OptionsHook => {
  const {
    productsOptions,
    saleConditionOptions,
    setProductsOptions,
    setSaleConditionOptions,
  } = useSumsContext();

  const addOption = (category: string, body: Option) => {
    category === CATEGORIES.PRODUCTS
      ? add(productsOptions, setProductsOptions, body)
      : add(saleConditionOptions, setSaleConditionOptions, body);
  }

  const removeOption = (category: string, id: number) => {
    category === CATEGORIES.PRODUCTS
      ? remove(productsOptions, setProductsOptions, id)
      : remove(saleConditionOptions, setSaleConditionOptions, id);
  }

  return {
    addOption,
    removeOption,
  };
};

export default useOptions;

const add = (
  state: DropdownOptions,
  setState: Dispatch<SetStateAction<DropdownOptions>>,
  body: Option,
) => {
  const newOption = {concept: body.concept, id: body.id + 1}
  const newList = state.list;
  newList.push(newOption);
  setState((prev) => ({ ...prev, list: newList }));
  localStorage.setItem(state.name, JSON.stringify({ ...state, list: newList }));
};

const remove = (
  state: DropdownOptions,
  setState: Dispatch<SetStateAction<DropdownOptions>>,
  id: number
) => {
  const newList = state.list.filter((item) => item.id !== id);
  setState((prev) => ({ ...prev, list: newList }));
  localStorage.setItem(state.name, JSON.stringify({ ...state, list: newList }));
};

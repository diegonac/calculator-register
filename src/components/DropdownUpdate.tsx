import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusLg, BsArrowLeft } from "react-icons/bs";
import { CATEGORIES, DropdownOptions } from "../types/sums.models";
import OptionItem from "./OptionItem";
import useOptions from "../hooks/useOptions";
import myUtilities from "../utils/tw.styles";

interface DropdownUpdateProps {
  options: DropdownOptions;
}

const DropdownUpdate: React.FC<DropdownUpdateProps> = ({ options }) => {
  const navigate = useNavigate();

  const { addOption } = useOptions();

  const [newOption, setNewOption] = useState<string>("");

  const handleNewOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!newOption.trim()) return;
    const lastElement = options.list[options.list.length - 1];
    addOption(options.name, { concept: newOption.trim(), id: lastElement.id });
    setNewOption("");
  };

  const goBack = () => {
    navigate(-1);
  };

  const nameCategory =
    options.name === CATEGORIES.PRODUCTS ? "producto" : "condición de venta";

  const title =
    options.name === CATEGORIES.PRODUCTS
      ? "Productos"
      : "Condiciones de venta";

  return (
    <div className="mx-auto max-w-500 bg-slate-200 dark:bg-neutral-800" data-aos="fade-right">
      <div className="flex items-center mx-6 my-4">
        <button
          title="Volver atrás"
          onClick={goBack}
          className={myUtilities.buttonSecondary + " !p-1.5"}
        >
          <BsArrowLeft />
        </button>
        <h3 className="ml-1 text-lg font-semibold">{title}</h3>
      </div>
      <form
        className="flex justify-center mt-4 mx-6"
        onSubmit={handleAddOption}
      >
        <div className={myUtilities.containerInput + "  mr-3"}>
          <input
            type="text"
            placeholder=" "
            value={newOption}
            onChange={handleNewOptionChange}
            className={myUtilities.input}
          />
          <label className={myUtilities.label}>{`Crear ${nameCategory}`}</label>
        </div>
        <button className="rounded-full h-max p-2 my-auto hover:bg-slate-400 hover:bg-opacity-20" type="submit" title={`Crear ${nameCategory}`}>
          <BsPlusLg />
        </button>
      </form>
      {options.list.map((option, index) => (
        <OptionItem option={option} category={options.name} key={index} />
      ))}
    </div>
  );
};

export default DropdownUpdate;

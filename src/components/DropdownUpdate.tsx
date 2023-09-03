import React, { ChangeEvent, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { CATEGORIES, DropdownOptions } from "../types/sums.models";
import OptionItem from "./OptionItem";
import useOptions from "../hooks/useOptions";
import "../assets/dropdownUpdate.css";

interface DropdownUpdateProps {
  options: DropdownOptions;
  modalOptions: React.RefObject<HTMLDivElement>;
}

const DropdownUpdate: React.FC<DropdownUpdateProps> = ({
  options,
  modalOptions,
}) => {
  const { addOption } = useOptions();

  const [newOption, setNewOption] = useState<string>("");

  const handleNewOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleClose = () => {
    modalOptions.current?.removeAttribute("style");
  };

  const handleAddOption = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if(!newOption.trim()) return;
    const lastElement = options.list[options.list.length - 1];
    addOption(options.name, { concept: newOption.trim(), id: lastElement.id });
    setNewOption("");
  };

  const nameCategory =
    options.name === CATEGORIES.PRODUCTS ? "producto" : "condición de venta";

  return (
    <div className="container-set-options" ref={modalOptions}>
      <div className="container-list-options">
        <button
          type="button"
          title="Cerrar"
          onClick={handleClose}
          className="button-close-modal"
        >
          <AiOutlineCloseCircle />
        </button>
        <form className="container-add-option" onSubmit={handleAddOption}>
          <input
            type="text"
            placeholder={`Crea tu ${nameCategory}`}
            value={newOption}
            onChange={handleNewOptionChange}
          />
          <button type="submit" title="Crear producto">
            <BsPlusSquare />
          </button>
        </form>
        {options.list.map((option, index) => (
          <OptionItem option={option} category={options.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DropdownUpdate;

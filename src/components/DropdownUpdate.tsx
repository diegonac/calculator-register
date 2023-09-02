import React, { ChangeEvent, useState } from "react";
import { DropdownOptions } from "../types/sums.models";
import OptionItem from "./OptionItem";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import "../assets/dropdownUpdate.css";
import useOptions from "../hooks/useOptions";

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
  }

  const handleClose = () => {
    modalOptions.current?.removeAttribute("style");
  };

  const handleAddOption = () => {
    const lastElement = options.list[options.list.length - 1];
    addOption(options.name, {concept: newOption, id: lastElement.id});
    setNewOption("");
  }

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
        <div className="container-add-option">
          <input type="text" placeholder="Crea tu producto" value={newOption} onChange={handleNewOptionChange} />
          <button type="button" title="Crear producto" onClick={handleAddOption}>
            <BsPlusSquare />
          </button>
        </div>
        {options.list.map((option, index) => (
          <OptionItem option={option} category={options.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DropdownUpdate;

import React, { ChangeEvent, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { CATEGORIES, DropdownOptions } from "../types/sums.models";
import OptionItem from "./OptionItem";
import useOptions from "../hooks/useOptions";
import myUtilities from "../utils/tw.styles";

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
    document.getElementById("root")?.removeAttribute("style");
  };

  const handleAddOption = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!newOption.trim()) return;
    const lastElement = options.list[options.list.length - 1];
    addOption(options.name, { concept: newOption.trim(), id: lastElement.id });
    setNewOption("");
  };

  const nameCategory =
    options.name === CATEGORIES.PRODUCTS ? "producto" : "condición de venta";

  return (
    <div
      className="hidden fixed top-0 h-screen w-screen justify-center items-center bg-black bg-opacity-90"
      ref={modalOptions}
    >
      <div className="rounded-md overflow-auto h-4/5 w-4/5 max-w-500 min-w-240 border border-blue-700 bg-slate-200 dark:bg-neutral-800">
        <button
          type="button"
          title="Cerrar"
          onClick={handleClose}
          className={myUtilities.buttonSecondary + " fixed my-4 mx-4 bg-slate-200 dark:bg-neutral-800 z-50"}
        >
          <AiOutlineCloseCircle />
        </button>
        <form className="flex justify-center mt-14 mx-6" onSubmit={handleAddOption}>
          <div className={myUtilities.containerInput + "  mr-3"}>
            <input
              type="text"
              placeholder=" "
              value={newOption}
              onChange={handleNewOptionChange}
              className={myUtilities.input}
            />
            <label
              className={myUtilities.label}
            >{`Crear ${nameCategory}`}</label>
          </div>
          <button type="submit" title={`Crear ${nameCategory}`}>
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

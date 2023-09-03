import React, { ChangeEvent, useRef } from "react";
import { DropdownOptions } from "../types/sums.models";
import DropdownUpdate from "./DropdownUpdate";
import Modal from "../modals/Modal";
import { showDropdownMsg } from "../utils/dataUtils";
import "../assets/dropdown.css";

interface DropdownProps {
  selectedOption: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionList: DropdownOptions;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedOption,
  onChange,
  optionList,
}) => {
  const containDropdown = useRef<HTMLDivElement>(null);
  const modalOptions = useRef<HTMLDivElement>(null);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
    const inputSum = document.querySelector<HTMLInputElement>(".input-sum");
    if (inputSum && optionList.name === "products") inputSum.focus();
  };

  const updateScrollFocus = () => {
    if (containDropdown.current) {
      containDropdown.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSetList = () => {
    modalOptions.current?.setAttribute("style", "display: flex;")
  }

  return (
    <div>
      <div
        className={"contain-dropdown " + optionList.name}
        ref={containDropdown}
      >
        <span>{showDropdownMsg(optionList.name)}</span>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          onClick={updateScrollFocus}
        >
          <option value="">Selecciona una opción</option>
          {optionList.list.map((item, index) => (
            <option key={index} value={item.concept}>
              {item.concept}
            </option>
          ))}
        </select>
      </div>
      <button type="button" title="Editar lista" className="button-set-list" onClick={handleSetList}>
        Editar lista
      </button>
      <Modal>
        <DropdownUpdate options={optionList} modalOptions={modalOptions} />
      </Modal>
    </div>
  );
};

export default Dropdown;

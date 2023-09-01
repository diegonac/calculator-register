import React, { ChangeEvent, useRef } from "react";
import { DropdownOptions } from "../types/sums.models";
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

  return (
    <div className={"contain-dropdown " + optionList.name} ref={containDropdown}>
      <span>{showDropdownMsg(optionList.name)}</span>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        onClick={updateScrollFocus}
      >
        <option value="">Selecciona una opción</option>
        {optionList.list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

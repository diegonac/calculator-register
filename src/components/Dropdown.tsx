import React, { ChangeEvent, useRef } from "react";
import { DropdownOptions } from "../types/sums.models";
import DropdownUpdate from "./DropdownUpdate";
import Modal from "../modals/Modal";
import { showDropdownMsg } from "../utils/dataUtils";
import myUtilities from "../utils/tw.styles";

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
    modalOptions.current?.setAttribute("style", "display: flex;");
    document.getElementById("root")?.setAttribute("style", "position: fixed");
  };

  return (
    <div className="mb-6 relative">
      <div ref={containDropdown}>
        <label className="sr-only">Underline Select</label>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          onClick={updateScrollFocus}
          className={myUtilities.select}
        >
          <option selected>{showDropdownMsg(optionList.name)}</option>
          {optionList.list.map((item, index) => (
            <option key={index} value={item.concept}>
              {item.concept}
            </option>
          ))}
        </select>
        <div className={myUtilities.arounds.container}>
          <div className={myUtilities.arounds.children}></div>
        </div>
      </div>
      <button
        type="button"
        title="Editar lista"
        className={myUtilities.buttonSecondary}
        onClick={handleSetList}
      >
        Editar lista
      </button>
      <Modal>
        <DropdownUpdate options={optionList} modalOptions={modalOptions} />
      </Modal>
    </div>
  );
};

export default Dropdown;

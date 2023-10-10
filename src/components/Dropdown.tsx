import React, { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownOptions } from "../types/sums.models";
import { showDropdownMsg } from "../utils/dataUtils";
import myUtilities from "../utils/tw.styles";

interface DropdownProps {
  selectedOption: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionList: DropdownOptions;
  scrollProductDropdown?: () => void;
  sumInput?: React.RefObject<HTMLInputElement>;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedOption,
  onChange,
  optionList,
  scrollProductDropdown,
  sumInput,
}) => {
  const containDropdown = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
    if (
      sumInput?.current &&
      optionList.name === "products" &&
      scrollProductDropdown
    ) {
      scrollProductDropdown();
      sumInput.current.focus();
    }
  };

  const updateScrollFocus = () => {
    if (containDropdown.current) {
      containDropdown.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSetList = () => {
    optionList.name === "products"
      ? navigate("/update-products")
      : navigate("update-sale-condition");
  };

  return (
    <div className="mb-6 relative">
      <div
        ref={containDropdown}
        className={
          optionList.name === "products" ? "product-dropdown" : undefined
        }
      >
        <label className="sr-only">Underline Select</label>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          onClick={updateScrollFocus}
          className={myUtilities.select}
        >
          <option value="">{showDropdownMsg(optionList.name)}</option>
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
    </div>
  );
};

export default Dropdown;

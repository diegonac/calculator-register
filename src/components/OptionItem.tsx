import React from "react";
import { Option } from "../types/sums.models";
import { BsTrash3 } from "react-icons/bs";
import useOptions from "../hooks/useOptions";
import "../assets/DropdownUpdate.css";

interface OptionItemProps {
  option: Option;
  category: string;
}

const OptionItem: React.FC<OptionItemProps> = ({ option, category }) => {
  const { removeOption } = useOptions();
  const handleRemoveOption = () => {
    removeOption(category, option.id);
  }
  return (
    <div className="container-option-item">
      <p>{option.concept}</p>
      <button
        type="button"
        title="Eliminar opción"
        className="button-delete-option"
        onClick={handleRemoveOption}
      >
        <BsTrash3 />
      </button>
    </div>
  );
};

export default OptionItem;

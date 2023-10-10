import React from "react";
import { Option } from "../types/sums.models";
import { BsTrash3 } from "react-icons/bs";
import useOptions from "../hooks/useOptions";

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
    <div className="flex justify-between pb-3 mx-6 my-6 border-b border-gray-600 dark:border-gray-300">
      <p>{option.concept}</p>
      <button
        type="button"
        title="Eliminar opción"
        className="rounded-full p-2 hover:bg-red-400 hover:bg-opacity-10 text-red-700"
        onClick={handleRemoveOption}
      >
        <BsTrash3 />
      </button>
    </div>
  );
};

export default OptionItem;

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import "../assets/dropdown.css";
import { showDropdownMsg } from '../utils/dataUtils';
import { dropdownOptions } from '../models/sums.models';

interface DropdownProps {
    selectedOption: string,
    setSelectedOption: Dispatch<SetStateAction<string>>,
    option: dropdownOptions,
}

const Dropdown: React.FC<DropdownProps> = ({ selectedOption, setSelectedOption, option }) => {

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={"contain-dropdown " + option.name}>
            <span>{ showDropdownMsg(option.name) }</span>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Selecciona una opción</option>
                { option.list.map((item, index) => <option key={index} value={ item }>{ item }</option>) }
            </select>
        </div>
    );
};

export default Dropdown;
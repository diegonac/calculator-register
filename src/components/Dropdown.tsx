import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react';
import "../assets/dropdown.css";
import { showDropdownMsg } from '../utils/dataUtils';
import { dropdownOptions } from '../models/sums.models';

interface DropdownProps {
    selectedOption: string,
    setSelectedOption: Dispatch<SetStateAction<string>>,
    option: dropdownOptions,
}

const Dropdown: React.FC<DropdownProps> = ({ selectedOption, setSelectedOption, option }) => {
    const containDropdown = useRef<HTMLDivElement>(null);

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const updateScrollFocus = () => {
        if (containDropdown.current) {
            containDropdown.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={"contain-dropdown " + option.name} ref={containDropdown} >
            <span>{ showDropdownMsg(option.name) }</span>
            <select value={selectedOption} onChange={handleOptionChange} onClick={updateScrollFocus}>
                <option value="">Selecciona una opción</option>
                { option.list.map((item, index) => <option key={index} value={ item }>{ item }</option>) }
            </select>
        </div>
    );
};

export default Dropdown;
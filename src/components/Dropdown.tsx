import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import "../assets/dropdown.css";

interface DropdownProps {
    selectedProduct: string,
    setSelectedProduct: Dispatch<SetStateAction<string>>,
}

const Dropdown: React.FC<DropdownProps> = ({ selectedProduct, setSelectedProduct }) => {

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(event.target.value);
    };

    return (
        <div className='contain-dropdown'>
            <select value={selectedProduct} onChange={handleOptionChange}>
                <option value="">Selecciona un producto</option>
                <option value="Remera">Remera</option>
                <option value="Pantalón">Pantalón</option>
                <option value="Zapato">Zapato</option>
            </select>
        </div>
    );
};

export default Dropdown;
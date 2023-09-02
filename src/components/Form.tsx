import React, { ChangeEvent, useState, useRef } from "react";
import Amount from "./Amount";
import Dropdown from "./Dropdown";
import Sum from "./Sum";
import useSums from "../hooks/useSums";
import useSumsContext from "../hooks/useSumsContext";
import "../assets/form.css";

const Form: React.FC = () => {
  const { order, setOrder, productsOptions, saleConditionOptions } = useSumsContext();

  const { addSum } = useSums();

  const sumInput = useRef<HTMLInputElement>(null);

  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);

  const handleClientChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, client: event.target.value }));
  };

  const handleSaleConditionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrder((prev) => ({ ...prev, saleCondition: event.target.value }));
  };

  const handleProductChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sumInput.current?.value) {
      addSum({ price, amount, product: selectedProduct });
      setPrice("");
      setAmount(1);
    }
    sumInput.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="container-input-client">
        <span>Escribe el nombre de tu cliente</span>
        <input
          type="text"
          name="name"
          value={order.client}
          onChange={handleClientChange}
        />
      </label>
      <Dropdown
        selectedOption={order.saleCondition}
        onChange={handleSaleConditionChange}
        optionList={saleConditionOptions}
      />
      <Dropdown
        selectedOption={selectedProduct}
        onChange={handleProductChange}
        optionList={productsOptions}
      />
      <Sum value={price} onChange={handlePriceChange} sumInput={sumInput} />
      <Amount value={amount} setValue={setAmount} />
      <button type="submit">Sumar</button>
    </form>
  );
};

export default Form;

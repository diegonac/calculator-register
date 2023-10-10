import React, { ChangeEvent, useState, useRef } from "react";
import Amount from "./Amount";
import Dropdown from "./Dropdown";
import Sum from "./Sum";
import useSums from "../hooks/useSums";
import useSumsContext from "../hooks/useSumsContext";
import myUtilities from "../utils/tw.styles";

const Form: React.FC = () => {
  const {
    order,
    productsOptions,
    saleConditionOptions,
    selectedProduct,
    setOrder,
    setSelectedProduct,
  } = useSumsContext();

  const { addSum } = useSums();

  const sumInput = useRef<HTMLInputElement>(null);

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

  const scrollProductDropdown = () => {
    setTimeout(() => {
      const dropdownProduct = document.querySelector(".product-dropdown");
      if (dropdownProduct) {
        dropdownProduct.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
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
    <form
      onSubmit={handleSubmit}
      className="w-11/12 md:w-3/4 max-w-500 min-w-240"
    >
      <div className={myUtilities.containerInput}>
        <input
          className={myUtilities.input}
          placeholder=" "
          type="text"
          name="name"
          value={order.client}
          onChange={handleClientChange}
        />
        <label className={myUtilities.label}>Nombre de tu cliente</label>
      </div>
      <Dropdown
        selectedOption={order.saleCondition}
        onChange={handleSaleConditionChange}
        optionList={saleConditionOptions}
      />
      <Dropdown
        selectedOption={selectedProduct}
        onChange={handleProductChange}
        optionList={productsOptions}
        sumInput={sumInput}
        scrollProductDropdown={scrollProductDropdown}
      />
      <Sum
        value={price}
        onChange={handlePriceChange}
        sumInput={sumInput}
        scrollProductDropdown={scrollProductDropdown}
      />
      <Amount value={amount} setValue={setAmount} />
      <button
        className={myUtilities.button}
        type="submit"
        onClick={scrollProductDropdown}
      >
        Sumar
      </button>
    </form>
  );
};

export default Form;

import React, { ChangeEvent, useState } from "react";
import Details from "./Details";
import DetailsButtons from "./DetailsButtons";
import Dropdown from "./Dropdown";
import Form from "./Form";
import { products, saleCondition } from "../utils/dataUtils";
import useSums from "../hooks/useSums";
import { SumsHooks } from "../types/sums.models";
import "../assets/layout.css";

const Layout: React.FC = () => {
  const [sums, setSums] = useState<SumsHooks["sums"]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedSaleCondition, setSelectedSaleCondition] = useState<string>("");
  const [client, setClient] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { addSum, removeSum, addAmount, removeAmount, total } = useSums(sums, setSums, selectedProduct);

  const deleteSums = () => {
    setSums([]);
  }

  const toggleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const clientChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClient(event.target.value);
  };

  return (
    <main>
      <h1>Calculadora registradora</h1>
      <div className="contain-input-client">
        <span>Escribe el nombre de tu cliente</span>
        <input type="text" name="name" value={client} onChange={clientChange} />
      </div>
      <Dropdown
        selectedOption={selectedSaleCondition}
        setSelectedOption={setSelectedSaleCondition}
        option={saleCondition}
      />
      <Dropdown
        selectedOption={selectedProduct}
        setSelectedOption={setSelectedProduct}
        option={products}
      />
      <Form addSum={addSum} />
      <h2 className="total-main">Total: ${total()}</h2>
      {showDetails && (
        <Details
          sums={sums}
          removeSum={removeSum}
          total={total}
          saleCondition={selectedSaleCondition}
          client={client}
          addAmount={addAmount}
          removeAmount={removeAmount}
        />
      )}
      {sums.length > 0 && (
        <DetailsButtons
          sums={sums}
          total={total}
          selectedSaleCondition={selectedSaleCondition}
          client={client}
          showDetails={showDetails}
          toggleShowDetails={toggleShowDetails}
          deleteSums={deleteSums}
        />
      )}
    </main>
  );
};

export default Layout;

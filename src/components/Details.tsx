import React from "react";
import Items from "./Items";
import { Sums, SumsHooks } from "../models/sums.models";
import "../assets/details.css";
import { capitalizeWords } from "../utils/dataUtils";

interface DetailsProps extends Sums {
  removeSum: SumsHooks["removeSum"];
  total: SumsHooks["total"];
  saleCondition: string;
  client: string;
  addAmount: SumsHooks["addAmount"];
  removeAmount: SumsHooks["removeAmount"];
}

const Details: React.FC<DetailsProps> = ({
  sums,
  removeSum,
  total,
  saleCondition,
  client,
  addAmount,
  removeAmount,
}) => {
  if (sums.length > 0) {
    return (
      <div className="container-details">
        <h2>Detalle</h2>
        <p>Cliente: {capitalizeWords(client)}</p>
        <p>Condición de la venta: {saleCondition.toLowerCase()}</p>
        <div className="container-items">
            <h3>Producto</h3>
            <h3>Precio</h3>
            <h3>Cantidad</h3>
            <h3>Subtotal</h3>
            <h3></h3>
          {sums.length > 0 &&
            sums.map((sum, index) => (
              <React.Fragment key={index}>
                {" "}
                <Items
                  sum={sum}
                  removeSum={removeSum}
                  addAmount={addAmount}
                  removeAmount={removeAmount}
                />{" "}
              </React.Fragment>
            ))}
        </div>
        <h2>Total: ${total()}</h2>
      </div>
    );
  }
};

export default Details;

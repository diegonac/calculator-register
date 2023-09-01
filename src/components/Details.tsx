import React from "react";
import { capitalizeWords } from "../utils/dataUtils";
import Items from "./Items";
import useSumsContext from "../hooks/useSumsContext";
import "../assets/details.css";

const Details: React.FC = () => {
  const {order} = useSumsContext();
  if (order.sums.length > 0) {
    return (
      <div id="container-details">
        <h2>Detalle</h2>
        <p>Cliente: {capitalizeWords(order.client)}</p>
        <p>Condición de la venta: {order.saleCondition.toLowerCase()}</p>
        <div className="container-items">
            <h3>Producto</h3>
            <h3>Precio</h3>
            <h3>Cantidad</h3>
            <h3>Subtotal</h3>
            <h3></h3>
          {order.sums.length > 0 &&
            order.sums.map((sum, index) => (
              <React.Fragment key={index}>
                {" "}
                <Items
                  sum={sum}
                />{" "}
              </React.Fragment>
            ))}
        </div>
        <h2>Total: ${order.total}</h2>
      </div>
    );
  }
};

export default Details;

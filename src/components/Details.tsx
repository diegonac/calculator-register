import React from "react";
import { capitalizeWords } from "../utils/dataUtils";
import Items from "./Items";
import useSumsContext from "../hooks/useSumsContext";

interface DetailsProps {
  containerDetails: React.RefObject<HTMLDivElement>;
}

const Details: React.FC<DetailsProps> = ({ containerDetails }) => {
  const {order} = useSumsContext();
  if (order.sums.length > 0) {
    return (
      <div className="w-full hidden" ref={containerDetails}>
        <h2 className="text-2xl my-4">Detalle</h2>
        <p className="my-4">Cliente: {capitalizeWords(order.client)}</p>
        <p className="my-4">Condición de la venta: {order.saleCondition.toLowerCase()}</p>
        <div className="grid grid-cols-details place-items-center my-4 gap-y-6">
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
        <h2 className="text-2xl my-4">Total: ${order.total}</h2>
      </div>
    );
  }
};

export default Details;

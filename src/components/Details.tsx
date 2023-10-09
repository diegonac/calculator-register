import React from "react";
import { capitalizeWords } from "../utils/dataUtils";
import Items from "./Items";
import useSumsContext from "../hooks/useSumsContext";

interface DetailsProps {
  containerDetails: React.RefObject<HTMLDivElement>;
}

const Details: React.FC<DetailsProps> = ({ containerDetails }) => {
  const { order } = useSumsContext();
  if (order.sums.length > 0) {
    return (
      <div className="w-full hidden" ref={containerDetails}>
        <h2 className="text-2xl my-4 font-semibold">Detalle</h2>
        <h3 className="my-4 font-medium flex">
          Cliente:{" "}
          <p className="ml-1 font-normal">{capitalizeWords(order.client)}</p>
        </h3>
        <h3 className="my-4 font-medium flex">
          Condición de la venta:{" "}
          <p className="ml-1 font-normal">
            {order.saleCondition.toLowerCase()}
          </p>
        </h3>
        <div className="grid grid-cols-details place-items-center my-4 gap-y-6 gap-x-2 overflow-x-auto">
          <h3 className="font-medium">Producto</h3>
          <h3 className="font-medium">Precio</h3>
          <h3 className="font-medium">Cantidad</h3>
          <h3 className="font-medium">Subtotal</h3>
          <h3></h3>
          {order.sums.length > 0 &&
            order.sums.map((sum, index) => (
              <React.Fragment key={index}>
                {" "}
                <Items sum={sum} />{" "}
              </React.Fragment>
            ))}
        </div>
        <h2 className="text-2xl my-4 font-semibold">Total: ${order.total}</h2>
      </div>
    );
  }
};

export default Details;

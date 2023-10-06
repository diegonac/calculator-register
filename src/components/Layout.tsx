import React from "react";
import ActionButtons from "./ActionButtons";
import Form from "./Form";
import useSumsContext from "../hooks/useSumsContext";

const Layout: React.FC = () => {
  const {order} = useSumsContext();

  return (
    <main>
      <h1 className="text-blue-700">Calculadora registradora</h1>
      <Form />
      <h2 className="total-main">Total: ${order.total}</h2>
      {order.sums.length > 0 && (
        <ActionButtons />
      )}
    </main>
  );
};

export default Layout;

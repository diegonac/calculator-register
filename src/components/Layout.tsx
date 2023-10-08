import React from "react";
import ActionButtons from "./ActionButtons";
import Form from "./Form";
import useSumsContext from "../hooks/useSumsContext";

const Layout: React.FC = () => {
  const {order} = useSumsContext();

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    const message = '¿Estás seguro de que quieres abandonar la página?';
    event.returnValue = message;
    return message;
  };

  if(order.sums.length === 1) {
    window.addEventListener('beforeunload', handleBeforeUnload);
  }

  return (
    <main className="flex flex-col items-center min-h-screen min-w-320">
      <h1 className="my-6 text-2xl">Calculadora registradora</h1>
      <Form />
      <h2 className="text-2xl">Total: ${order.total}</h2>
      {order.sums.length > 0 && (
        <ActionButtons />
      )}
    </main>
  );
};

export default Layout;

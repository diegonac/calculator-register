import React from "react";
import Layout from "./components/Layout";
import { SumsProvider } from "./context/SumsContext";

const App: React.FC = () => {
  return (
    <SumsProvider>
      <Layout />
    </SumsProvider>
  );
}

export default App;

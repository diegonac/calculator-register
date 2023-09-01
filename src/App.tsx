import Layout from "./components/Layout";
import { SumsProvider } from "./context/SumsContext";
import "./App.css";

function App() {
  return (
    <SumsProvider>
      <Layout />
    </SumsProvider>
  );
}

export default App;

import React from "react";
import AOS from 'aos';
import AppRouter from "./router/AppRouter";
import 'aos/dist/aos.css';

AOS.init();

const App: React.FC = () => {
  return <AppRouter />
}

export default App;

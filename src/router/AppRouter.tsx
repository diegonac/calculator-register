import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SumsProvider } from "../context/SumsContext";
import HomePage from "../pages/HomePage";
import UpdateProductPage from "../pages/UpdateProductPage";
import UpdateSaleConditionPage from "../pages/UpdateSaleConditionPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <SumsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update-products" element={<UpdateProductPage />} />
          <Route path="/update-sale-condition" element={<UpdateSaleConditionPage />} />
        </Routes>
      </SumsProvider>
    </BrowserRouter>
  );
};

export default AppRouter;

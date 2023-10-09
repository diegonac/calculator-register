import React from "react";
import DropdownUpdate from "../components/DropdownUpdate";
import useSumsContext from "../hooks/useSumsContext";

const UpdateProductPage: React.FC = () => {
  const { productsOptions } = useSumsContext();
  return <DropdownUpdate options={productsOptions} />;
};

export default UpdateProductPage;

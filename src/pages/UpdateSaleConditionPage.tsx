import React from "react";
import DropdownUpdate from "../components/DropdownUpdate";
import useSumsContext from "../hooks/useSumsContext";

const UpdateSaleConditionPage: React.FC = () => {
  const { saleConditionOptions } = useSumsContext();
  return <DropdownUpdate options={saleConditionOptions} />;
};

export default UpdateSaleConditionPage;

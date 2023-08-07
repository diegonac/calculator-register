import React, { useState } from "react";
import Details from "./Details";
import Dropdown from "./Dropdown";
import Form from "./Form";
import generatePDF from "../api/pdfmakeApi";
import { products, saleCondition } from "../utils/dataUtils";
import useSums from "../hooks/useSums";
import { SumsHooks } from "../models/sums.models";
import "../assets/layout.css";

const Layout: React.FC = () => {
    const [sums, setSums] = useState<SumsHooks["sums"]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [selectedSaleCondition, setSelectedSaleCondition] = useState<string>("");
    const { addSum, removeSum, total } = useSums(sums, setSums, selectedProduct);
    
    const handlePDF = () => {
        generatePDF(sums, total, selectedSaleCondition);
    }

    const handleNewSum = () => {
        setSums([]);
    }
    
    return (
        <main>
            <h1>Calculadora de registro</h1>
            <Dropdown selectedOption={selectedSaleCondition} setSelectedOption={setSelectedSaleCondition} option={saleCondition} />
            <Dropdown selectedOption={selectedProduct} setSelectedOption={setSelectedProduct} option={products} />
            <Form addSum={addSum}/>
            <Details sums={sums} removeSum={removeSum} total={total} saleCondition={selectedSaleCondition} />
            { sums.length > 0 && 
                <div className="contain-buttons-layout">
                    <button title="PDF" type="button" onClick={handlePDF}>PDF</button> 
                    <button title="Nueva suma" type="button" onClick={handleNewSum}>Nueva suma</button>
                </div>
            }
        </main>
    )
}

export default Layout;
import React, { useState } from "react";
import Details from "./Details";
import Dropdown from "./Dropdown";
import Form from "./Form";
import generatePDF from "../api/pdfmakeApi";
import useSums from "../hooks/useSums";
import { SumsHooks } from "../models/sums.models";
import "../assets/layout.css";

const Layout: React.FC = () => {
    const [sums, setSums] = useState<SumsHooks["sums"]>([]);
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const { addSum, removeSum, total } = useSums(sums, setSums, selectedProduct);
    
    const handlePDF = () => {
        generatePDF(sums, total);
    }

    const handleNewSum = () => {
        setSums([]);
    }
    
    return (
        <main>
            <h1>Calculadora de registro</h1>
            <Dropdown selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
            <Form addSum={addSum}/>
            <Details sums={sums} removeSum={removeSum} total={total} />
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
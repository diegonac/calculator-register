import React, { ChangeEvent, useState } from "react";
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
    const [client, setClient] = useState<string>("");
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const { addSum, removeSum, total } = useSums(sums, setSums, selectedProduct);
    
    const handlePDF = () => {
        generatePDF(sums, total, selectedSaleCondition, client);
    }

    const handleNewSum = () => {
        setSums([]);
    }

    const clientChange = (event: ChangeEvent<HTMLInputElement>) => {
        setClient(event.target.value);
    }

    const toggleShowDetails = () => {
        setShowDetails(prev => !prev);
    }
    
    return (
        <main>
            <h1>Calculadora registradora</h1>
            <div className="contain-input-client">
                <span>Escribe el nombre de tu cliente</span>
                <input type="text" name="name" value={client} onChange={clientChange} />
            </div>
            <Dropdown selectedOption={selectedSaleCondition} setSelectedOption={setSelectedSaleCondition} option={saleCondition} />
            <Dropdown selectedOption={selectedProduct} setSelectedOption={setSelectedProduct} option={products} />
            <Form addSum={addSum}/>
            <h2>Total: ${total()}</h2>
            { showDetails && 
                <Details sums={sums} removeSum={removeSum} total={total} saleCondition={selectedSaleCondition} client={client} />
            }
            { sums.length > 0 && 
                <div className="contain-buttons-layout">
                    <button title={ showDetails ? "Ocultar detalle" : "Ver detalle" } type="button" onClick={toggleShowDetails}>
                        { showDetails ? "Ocultar detalle" : "Ver detalle" }
                    </button>
                    <button title="PDF" type="button" onClick={handlePDF}>PDF</button> 
                    <button title="Nueva suma" type="button" onClick={handleNewSum}>Eliminar suma</button>
                </div>
            }
        </main>
    )
}

export default Layout;
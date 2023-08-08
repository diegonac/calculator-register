import React, { useEffect, useRef } from "react";
import Items from "./Items";
import { Sums, SumsHooks } from "../models/sums.models";
import "../assets/details.css";
import { capitalizeWords } from "../utils/dataUtils";

interface DetailsProps extends Sums {
    removeSum: SumsHooks["removeSum"],
    total: SumsHooks["total"],
    saleCondition: string,
    client: string,
}

const Details: React.FC<DetailsProps> = ({ sums, removeSum, total, saleCondition, client }) => {
    const containerDetails = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if(containerDetails.current) {
            containerDetails.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        handleScroll();
    })
    
    if(sums.length > 0) {
        return (
            <div className="container-details" ref={containerDetails}>
                <h2>Detalle</h2>
                <p>Cliente: { capitalizeWords(client) }</p>
                <p>Condición de la venta: { saleCondition.toLowerCase() }</p>
                { sums.length > 0 && sums.map((sum, index) => <div key={index}> <Items sum={sum} removeSum={removeSum} /> </div>) }
                <h2>Total: ${ total() }</h2>
            </div>
        )
    }
}

export default Details;
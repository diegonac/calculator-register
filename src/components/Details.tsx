import React from "react";
import Items from "./Items";
import { Sums, SumsHooks } from "../models/sums.models";
import "../assets/details.css";

interface DetailsProps extends Sums {
    removeSum: SumsHooks["removeSum"],
    total: SumsHooks["total"],
}

const Details: React.FC<DetailsProps> = ({ sums, removeSum, total }) => {
    
    if(sums.length > 0) {
        return (
            <div className="container-details">
                <h2>Detalle</h2>
                { sums.length > 0 && sums.map((sum, index) => <div key={index}> <Items sum={sum} removeSum={removeSum} /> </div>) }
                <h2>Total: { total() }</h2>
            </div>
        )
    }
}

export default Details;
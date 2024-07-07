import React from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"; 

const { cart } = React.useContext (CartContext);
console.log(cart);

const totalItems = cart.reduce((total, item) => total + item.quantity, 0)


const CarWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} style={{ color: "black", fontSize: '1.3rem', marginRight: "0.5rem" }} />
            <span style={{ color: "black", fontSize: '1.3rem'  }}> {totalItems} </span> 
        </div>
    );
}

export default CarWidgetComponent;
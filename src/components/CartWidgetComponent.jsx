import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 

const CarWidgetComponent = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} style={{ color: "black", fontSize: '1.3rem', marginRight: "0.5rem" }} />
            <span style={{ color: "black", fontSize: '1.3rem'  }}> 0 </span> 
        </div>
    );
}

export default CarWidgetComponent;
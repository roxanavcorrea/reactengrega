import React from "react";
import { getProductById } from "../src/services/products.jsx";

export const useProductById = (id) => {
    const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
        getProductById(id)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]); 

    return { product }; 
};
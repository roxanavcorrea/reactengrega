import React from "react";
import { getProductsByCategory } from "../services/products";

export const useProductsByCategory = () => {
        const [products, setProducts] = React.useState([]);
    
        React.useEffect(() => {
            getProductsByCategory(category)
                .then((response) => {
                    setProducts(response.data.products);
                })
                .catch((error) => {
                    console.error(error);
                });
        }, [category]); 
    
        return { products }; 
    };

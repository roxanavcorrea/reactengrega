import React from "react";
import { getAllProducts } from './services/products.js';

export const useProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React - useState(true);

    React.useEffect(() => {
        getAllProducts()
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
                setError("Error al cargar los productos. Por favor, intenta nuevamente más tarde.");
            }).finally(() => {
                setLoading(false);
            });
    }, [product]);

    return { products, error, loading };
}

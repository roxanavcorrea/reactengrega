import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");

        getDocs(productsCollection)
            .then((snapshot) => {
                const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsList);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { products, error, loading };
};


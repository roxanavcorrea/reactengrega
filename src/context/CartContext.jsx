import React from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [orders, setOrders] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const ordersCollection = collection(db, "orders");
            const snapshot = await getDocs(ordersCollection);
            const ordersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(ordersList);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    const addOrder = async (order) => {
        try {
            const ordersCollection = collection(db, "orders");
            await addDoc(ordersCollection, order);
            fetchOrders(); 
        } catch (err) {
            setError(err);
        }
    };

    const deleteOrder = async (id) => {
        try {
            await deleteDoc(doc(db, "orders", id));
            fetchOrders(); 
        } catch (err) {
            setError(err);
        }
    };

    React.useEffect(() => {
        fetchOrders();
    }, []);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: newCart[existingProductIndex].quantity + quantity,
                };
                return newCart;
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                const newQuantity = newCart[existingProductIndex].quantity - quantity;
                if (newQuantity <= 0) {
                    return newCart.filter((item) => item.id !== product.id);
                } else {
                    newCart[existingProductIndex] = {
                        ...newCart[existingProductIndex],
                        quantity: newQuantity,
                    };
                    return newCart;
                }
            }
            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, orders, addOrder, deleteOrder, error, loading }}>
            {children}
        </CartContext.Provider>
    );
};
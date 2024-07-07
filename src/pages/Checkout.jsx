import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Checkout = () => {
    const { addOrder } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("efectivo");

    const createOrder = () => {
        const order = {
            name,
            lastName,
            numberPhone,
            paymentMethod,
            date: new Date().toISOString()
        };
        addOrder(order);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Numero de Telefono"
                value={numberPhone}
                onChange={(e) => setNumberPhone(e.target.value)}
            />
            <select
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
            >
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
            </select>
            <button onClick={createOrder}>Crear Orden</button>
        </div>
    );
};

export default Checkout;

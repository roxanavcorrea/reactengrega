import React from "react";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = ({ product }) => {
    const { cart, addToCart, removeFromCart } = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        addToCart(product, 1);
    }

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            removeFromCart(product, 1);
        }
    }

    const getProductQuantityInCart = (productId) => {
        const cartItem = cart.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <div>
            <div>
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={product.title} style={{ width: 800, height: 800 }} />
                ))}
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={handleAdd} style={{ color: "white" }}>+</button>
                    <span style={{ margin: "0 10px" }}>{getProductQuantityInCart(product.id)}</span>
                </div>
                <div>
                    <button onClick={handleRemove} style={{ color: "pink" }}>-</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;

import React from "react";
import { useProductById } from "../hooks/useProductById.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx";
import { useParams } from "react-router-dom";

const Item = () => {
    const {id} = useParams ()
    const {product} = useProductById (id);
    return (
        <ItemDetailContainer product={product} />
    );
}

export default Item;
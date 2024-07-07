import React from "react";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../src/hooks/useProductsByCategory.jsx";

const Category = () => {
    const {id} = useParams ()
    const { products} = useProductsByCategory (id);
    return (
        <ItemListContainerComponent products ={products}/>
    );
}

export default Category;
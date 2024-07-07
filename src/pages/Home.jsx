import React from "react";
import ItemListContainerComponent from "../src/components/ItemListContainerComponent.jsx";
import { useProducts } from "../src/hooks/useProducts.jsx";
import LoaderComponents from "../src/components/LoaderComponents.jsx";

const Home = () => {
    const { products, loading } = useProducts();
    return loading ? ( <LoaderComponents/> 
) : ( 
<ItemListContainerComponent products ={products}/>        
    );
}

export default Home;
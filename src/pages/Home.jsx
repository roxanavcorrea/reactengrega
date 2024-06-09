import React from 'react';
import ItemListContainerComponent from '../components/ItemListContainerComponent';
import { useProducts } from "../hooks/useProducts";
import LoaderComponents from '../components/LoaderComponents';

const Home = () => {
    const { products, loading } = useProducts();
    return loading ? ( <LoaderComponents/> 
) : ( 
<ItemListContainerComponent products ={products}/>        
    );
}

export default Home;
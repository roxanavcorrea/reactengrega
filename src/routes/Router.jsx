import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Item from './pages/Item.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';

const Home = () => <div>Home</div>;
const Category = () => <div>Category</div>;
const Item = () => <div>Item</div>;

const Router = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<Item />} />
                <Route path="/category/:id" element={<Category />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

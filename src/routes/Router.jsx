import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import Home from "./pages/Home";
import Item from "./pages/Item";
import EventPage from "./pages/EventPage";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";  

const Router = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<Item />} />
                <Route path="/eventos/animados" element={<EventPage />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="#" element={<h1> Not Found </h1>} /> 
                </Routes>
        </BrowserRouter>
    );
}

export default Router;


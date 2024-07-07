import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../src/components/ButtonComponent.jsx';
import ItemListContainerComponent from '../src/components/ItemListContainerComponent.jsx'; 
import { CartProvider } from './context/CartContext.jsx';
import Router from '../src/routes/Router.jsx';


function App() {
  const [state, setState] = useState(0);

  const handleLogin = () => {
    setState(state + 1);
  };

  const handleLogout = () => {
    setState(state - 1);
  };

  console.log(state);

  return ( <CartProvider>
    <React.Fragment>
      <div className="App">
        <Router />
        <ItemListContainerComponent greeting="¡Hola! Que disfrutes tu página favorita" /> 
        <h1>Mi tienda: JB</h1>
        <span>Logueate</span>
        <ButtonComponent label="Ingresar" onClick={handleLogin} />
        <span>Deslogueate</span>
        <ButtonComponent label="Salir" onClick={handleLogout} />
      </div>
    </React.Fragment>
    </CartProvider>);
}

export default App;

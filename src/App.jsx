import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/ButtonComponent.jsx';
import ItemListContainerComponent from './components/ItemListContainerComponent.jsx'; 
import Router from './routes/Router.jsx';

function App () {
  const [state, setState] = useState(0); /* Usa useState para inicializar el estado */

  console.log(state);
  
  return (
    <React.Fragment>
      <Router />
      <ItemListContainerComponent greeting="¡Hola! Que disfrutes tu página favorita"/> 
      <div className="App">
        <h1>Mi tienda: JB </h1>
        <span> Logueate </span>
        <ButtonComponent label="Ingresar"/>
        <span> Deslogueate </span>
        <ButtonComponent label="Salir"/>
      </div>
    </React.Fragment>
  );
}

export default App;
 /* Toda la app puede visualizar lo que estoy poniendo aca */
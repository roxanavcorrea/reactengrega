import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu3XbXiFPEr6gTWDTFwLkb7dPCqw7HNDQ",
  authDomain: "reactjs-roxanacorrea.firebaseapp.com",
  projectId: "reactjs-roxanacorrea",
  storageBucket: "reactjs-roxanacorrea.appspot.com",
  messagingSenderId: "149475402517",
  appId: "1:149475402517:web:1af51df9eb9fb30c223f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

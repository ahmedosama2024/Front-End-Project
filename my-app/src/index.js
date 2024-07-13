import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";




const Root = ReactDom.createRoot(document.getElementById('root'))

Root.render(
 
  <BrowserRouter>
        <App/>  
  </BrowserRouter>
 
  
);
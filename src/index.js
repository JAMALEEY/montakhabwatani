import React from 'react';
import ReactDOM from 'react-dom/client';
import './Resources/css/app.css';
import Routers from './routes';
import { BrowserRouter } from "react-router-dom-v5-compat";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);


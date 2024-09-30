import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa Bootstrap JS (necesario para que funcione el carrusel)
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

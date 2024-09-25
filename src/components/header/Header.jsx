// src/components/header/Header.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa los estilos del componente

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Desertu Berria</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Alinea los enlaces a la derecha */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Conocenos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Eventos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documents">Documentos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stores">Tiendas</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


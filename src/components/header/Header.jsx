import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de importar tus estilos

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado de apertura/cierre del menú
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to="/">Desertu Berria</Link>
        {/* Botón de hamburguesa */}
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menú con animación de deslizamiento */}
        <div className={`navbar-collapse sliding-menu ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Alinear los elementos del nav a la derecha */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activities">Actividades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Actualidad</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Participa</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Header;





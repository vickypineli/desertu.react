// src/components/infoSection/InfoBox.jsx
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './InfoSection.css'; // Añade aquí los estilos específicos para este componente

const InfoCardIcon = ({ icon, title, text, link, buttonText, showButton }) => {
  return (
    <Col md={3} className="info-box animate-from-top">
      <div className="info-icon">
        {icon} {/* Aquí renderizamos el ícono pasado por props */}
      </div>
      <h3>{title}</h3> {/* Título dinámico */}
      <p>{text}</p> {/* Texto dinámico */}
      {showButton && ( /* Mostramos el botón solo si showButton es true */
        <Link to={link}>
          <button className="btn btn-primary">{buttonText}</button>
        </Link>
      )}
    </Col>
  );
};

// Validación de PropTypes para InfoBox
InfoCardIcon.propTypes = {
  icon: PropTypes.node.isRequired, // Icono puede ser un componente JSX
  title: PropTypes.string.isRequired, // Título debe ser una cadena
  text: PropTypes.string.isRequired, // Texto debe ser una cadena
  link: PropTypes.string.isRequired, // Link debe ser una cadena
  buttonText: PropTypes.string, // Botón opcional
  showButton: PropTypes.bool, // Booleano que indica si el botón se debe mostrar
};

export default InfoCardIcon;

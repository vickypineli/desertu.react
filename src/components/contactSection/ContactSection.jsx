// src/components/ContactSection.jsx

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <Container className="contact-section my-4 p-4">
      <Row className="align-items-center">
        {/* Caja izquierda: Imagen */}
        <Col md={6} className="contact-section-image">
          <img
            src="/assets/buzon.jpg" // Reemplaza con la ruta correcta de la imagen
            alt="Imagen de Contacto"
            className="img-fluid"
          />
        </Col>
        
        {/* Caja derecha: Título, texto y botón */}
        <Col md={6} className="contact-section-content">
          <h2>Contacta con Nosotros</h2>
          <p>
            ¿Tienes alguna duda o deseas saber más sobre nuestra asociación?
            ¡No dudes en contactarnos! Estamos aquí para ayudarte y darte
            toda la información que necesites.
          </p>
          <Link to="/contact">
            <button className="btn btn-primary">Contactar</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;

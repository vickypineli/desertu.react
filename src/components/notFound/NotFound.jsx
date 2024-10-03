// src/components/NotFound.jsx


import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container className="not-found-container my-5">
      <Row className="align-items-center">
        {/* Columna izquierda: Imagen */}
        <Col md={6} className="not-found-image">
          <img
            src="/assets/not-found-image.jpg" // Cambia esta ruta por la ruta correcta de la imagen
            alt="Página no encontrada"
            className="img-fluid"
          />
        </Col>

        {/* Columna derecha: Texto */}
        <Col md={6} className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2>¡Página no encontrada!</h2>
          <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
          <Link to="/">
            <Button variant="primary">Volver al Inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

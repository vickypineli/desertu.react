// src/components/AboutBox.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutBox.css';

const AboutBox = () => {
  return (
    <Container className="about-box my-4 p-4">
      <Row className="align-items-center">
        {/* Caja izquierda: Imagen */}
        <Col md={6} className="about-box-image">
          <img
            src="/assets/plaza-desierto3.jpg" // Reemplaza con la ruta correcta de la imagen
            alt="Imagen del Barrio"
            className="img-fluid"
          />
        </Col>
        
        {/* Caja derecha: Título, texto y botón */}
        <Col md={6} className="about-box-content">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una asociación de vecinos y vecinas que estamos en el barrio de Barakaldo. 
            A pesar de que somos un barrio de reciente construcción, el Barrio del Desierto 
            fue fundado hace años...
          </p>
          <Link to="/about">
            <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutBox;

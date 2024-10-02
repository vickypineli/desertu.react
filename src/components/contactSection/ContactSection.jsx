// src/components/ContactSection.jsx
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactSection.css';

const ContactSection = () => {
    // Hook para saber cuándo el contenedor está visible
    const { ref, inView } = useInView({
      triggerOnce: true, // Solo se activa una vez cuando el componente está en vista
      threshold: 0.5, // Solo el 50% del componente necesita estar visible para activar la animación
    });
  
    // Log para saber si el contenedor está en vista
    if (inView) {
      console.log('ContactBox está ahora en vista.');
    }
  return (
         <Container
      ref={ref}
      className={`contact-section my-4 p-4 ${inView ? 'in-view' : ''}`} // Añadir clase 'in-view' cuando el contenedor es visible
    >
      <Row className="align-items-center">
        {/* Caja izquierda: Imagen */}
        <Col
          md={6}
          className={`contact-section-image animate-from-left ${inView ? 'animate-in' : ''}`}
        >
          <img
            src="/assets/buzon.jpg" 
            alt="Imagen de Contacto"
            className="img-fluid"
          />
        </Col>
        
        {/* Caja derecha: Título, texto y botón */}
        <Col
          md={6}
          className={`contact-section-content animate-from-right ${inView ? 'animate-in' : ''}`}
        >
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

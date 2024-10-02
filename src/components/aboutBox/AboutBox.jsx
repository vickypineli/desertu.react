// src/components/AboutBox.jsx
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutBox.css';

const AboutBox = () => {
  // Hook para saber cuándo el contenedor está visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez cuando el componente está en vista
    threshold: 0.2, // Solo el 20% del componente necesita estar visible para activar la animación
  });

  // Log para saber si el contenedor está en vista
  if (inView) {
    console.log('AboutBox está ahora en vista.');
  }

  return (
    <Container
      ref={ref}
      className={`about-box my-5 p-4 ${inView ? 'in-view' : ''}`} // Añadir clase 'in-view' cuando el contenedor es visible
    >
      <Row className="align-items-center">
        {/* Caja izquierda: Imagen */}
        <Col
          md={6}
          className={`about-box-image animate-from-left ${inView ? 'animate-in' : ''}`}
        >
          <img
            src="/assets/plaza-desierto3.jpg" // Reemplaza con la ruta correcta de la imagen
            alt="Imagen del Barrio"
            className="img-fluid"
          />
        </Col>

        {/* Caja derecha: Título, texto y botón */}
        <Col
          md={6}
          className={`about-box-content animate-from-right ${inView ? 'animate-in' : ''}`}
        >
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una asociación de vecinos y vecinas que estamos en el barrio de Barakaldo. 
            A pesar de que somos un barrio de reciente construcción, el Barrio del Desierto 
            fue fundado hace años... Conoce cómo es nuestro barrio, su historia y cómo hemos crecido a lo largo de los años.
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



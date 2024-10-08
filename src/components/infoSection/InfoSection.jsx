import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStore, FaUsers } from 'react-icons/fa';
import { LuPartyPopper } from "react-icons/lu";
import './InfoSection.css';


const InfoSection = () => {
  // Hook para saber cuándo el contenedor está visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez cuando el componente está en vista
    threshold: 0.5, // Solo el 50% del componente necesita estar visible para activar la animación
  });

  if (inView) {
    console.log('AboutBox está ahora en vista.');
  }

    return (
  <Container fluid 
    ref={ref}
    className={`info-boxes-section my-5 ${inView ? 'in-view' : ''}`} 
    >
    <Row className="justify-content-center text-center">
        {/* Primera caja: El Barrio */}
        <Col 
          md={3} 
          className={`info-box animate-from-top ${inView ? 'animate-in' : ''}`}
        >
          
          <div className="info-icon">
            <FaStore size={100} />
          </div>
          <h3>Nuestro Barrio</h3>
          <p>Conoce todas las tiendas que hay en el barrio sus horarios, servicios y ubicación.</p>
          <Link to="/services">
          <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>

        {/* Segunda caja: Nuestras Fiestas */}
        <Col 
          md={3} 
          className={`info-box animate-from-top ${inView ? 'animate-in' : ''}`}
          >
          <div className="info-icon">
            <LuPartyPopper  size={100} />
          </div>
          <h3>Lo que hacemos</h3>
          <p>Descubre las festividades que organizamos para mantener viva la alegría y la tradición en nuestro barrio.</p>
          <Link to="/activities">
            <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>

        {/* Tercera caja: Cómo Nos Organizamos */}
        <Col 
          md={3} 
          className={`info-box animate-from-top ${inView ? 'animate-in' : ''}`}
          >
          <div className="info-icon">
            <FaUsers size={100} />
          </div>
          <h3>Ultimas noticias</h3>
          <p>Infórmate sobre cómo se estructura nuestra asociación y cómo nos organizamos para mejorar nuestro barrio.</p>
          <Link to="/Blog">
          <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>
      </Row>
    </Container>
    );
};

export default InfoSection;
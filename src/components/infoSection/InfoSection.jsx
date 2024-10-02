import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStore, FaUsers } from 'react-icons/fa';
import { LuPartyPopper } from "react-icons/lu";
import './InfoSection.css';


const InfoSection = () => {
    return (
<Container fluid className="info-boxes-section my-5">
    <Row className="justify-content-center text-center">
        {/* Primera caja: El Barrio */}
        <Col md={3} className="info-box ">
          <div className="info-icon">
            <FaStore size={100} />
          </div>
          <h3>Compra en el Barrio</h3>
          <p>Conoce todas las tiendas que hay en el barrio sus horarios, servicios y ubicación.</p>
          <Link to="/about-barrio">
          <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>

        {/* Segunda caja: Nuestras Fiestas */}
        <Col md={3} className="info-box ">
          <div className="info-icon">
            <LuPartyPopper  size={100} />
          </div>
          <h3>Nuestras Fiestas</h3>
          <p>Descubre las festividades que organizamos para mantener viva la alegría y la tradición en nuestro barrio.</p>
          <Link to="/about-fiestas">
            <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>

        {/* Tercera caja: Cómo Nos Organizamos */}
        <Col md={3} className="info-box ">
          <div className="info-icon">
            <FaUsers size={100} />
          </div>
          <h3>Cómo Nos Organizamos</h3>
          <p>Infórmate sobre cómo se estructura nuestra asociación y cómo nos organizamos para mejorar nuestro barrio.</p>
          <Link to="/about-organizacion">
          <button className="btn btn-primary">Leer más</button>
          </Link>
        </Col>
      </Row>
    </Container>
    );
};

export default InfoSection;
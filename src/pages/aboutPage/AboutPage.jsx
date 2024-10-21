import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import './AboutPage.css';
import ScrollToTopButton from '../../components/scrollToTopButton/ScrollToTopButton';
import Modal from '../../components/modal/Modal';

const AboutPage = () => {
   // Hook para saber cuándo el contenedor está visible
   const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez cuando el componente está en vista
    threshold: 0.5, // Solo el 50% del componente necesita estar visible para activar la animación
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  
  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Container>
      <Row ref={ref} className={`justify-content-center align-items-center my-4 p-4 ${inView ? 'in-view' : ''}`}>
        <Col md={5} className={`about-box-image animate-from-left ${inView ? 'animate-in' : ''}`}>
          <img
            src="/assets/desertu_aereo.png"
            alt="Imagen del Barrio"
            className="img-fluid"
          />
        </Col>

        <Col md={5} className={`about-box-text animate-from-right ${inView ? 'animate-in' : ''}`}>
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una asociación de vecinos y vecinas ubicada en el barrio Desertu-Urban del municipio de Barakaldo.
            A pesar de que somos un barrio de reciente construcción, el Barrio del Desierto fue fundado hace años...
            Conoce cómo es nuestro barrio, su historia y cómo hemos crecido a lo largo de los años.
          </p>
        </Col>
      </Row>

      <Row className="organization-section justify-content-center align-items-center text-center">
        <Col xs={12} className="organization-box-title">
          <h2>Así nos organizamos</h2>
          <p>Dentro de la asociación nos encargamos de diferentes actividades, a continuación te presentamos los grupos con sus responsabilidades.</p>
        </Col>

        {/* Primera caja: Gazte Batzordea */}
        <Col xs={12} md={3} lg={3} className={`organization-box animate-from-top ${inView ? 'animate-in' : ''}`}>
          <div className="organization-img">
            <img src="/assets/gazte-batzorde.jpg" alt="Gazte Batzordea" />
          </div>
          <h3>Gazte Batzordea</h3>
          <button
            className="btn btn-primary"
            onClick={() => handleOpenModal('Gazte Batzordea', 'El grupo encargado de coordinar las actividades juveniles y culturales del barrio.')}
          >
            Leer más
          </button>
        </Col>

        {/* Segunda caja: Desertu Batzordea */}
        <Col xs={12} md={3} lg={3} className={`organization-box animate-from-top ${inView ? 'animate-in' : ''}`}>
          <div className="organization-img">
            <img src="/assets/naguzi-batzorde.jpg" alt="Desertu Berria" />
          </div>
          <h3>Desertu Berria</h3>
          <button
            className="btn btn-primary"
            onClick={() => handleOpenModal('Desertu Berria', 'Este equipo organiza eventos y actividades comunitarias dentro del barrio Desertu.')}
          >
            Leer más
          </button>
        </Col>

        {/* Tercera caja: Jai Batzordea */}
        <Col xs={12} md={3} lg={3} className={`organization-box animate-from-top ${inView ? 'animate-in' : ''}`}>
          <div className="organization-img">
            <img src="/assets/jai-batzorde.jpg" alt="Jai Batzordea" />
          </div>
          <h3>Jai Batzordea</h3>
          <button
            className="btn btn-primary"
            onClick={() => handleOpenModal('Jai Batzordea', 'Encargados de las fiestas y celebraciones tradicionales en el barrio.')}
          >
            Leer más
          </button>
        </Col>
      </Row>
      
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        description={modalContent.description}
      />

      <Row>
        <ScrollToTopButton />
      </Row>
    </Container>
  );
};

export default AboutPage;

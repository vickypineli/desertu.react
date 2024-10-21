// src/components/infoCard/InfoCard.jsx
// src/components/infoCard/InfoCard.jsx

import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './InfoCard.css'; // Importamos los estilos

const InfoCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  imagePosition = 'left',
  additionalClass = ''
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Row 
      ref={ref} 
      className={`justify-content-center align-items-center my-4 p-4 ${inView ? 'in-view' : ''} ${imagePosition === 'right' ? 'flex-row-reverse' : ''} ${additionalClass}`}
    >
      <Col
        md={5}
        className={`info-card-image animate-from-${imagePosition === 'left' ? 'left' : 'right'} ${inView ? 'animate-in': ''}`}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="img-fluid"
        />
      </Col>

      <Col
        md={5}
        className={`info-card-text animate-from-${imagePosition === 'left' ? 'right' : 'left'} ${inView ? 'animate-in' : ''}`}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

// Definimos los PropTypes para el componente
InfoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,   
  imageAlt: PropTypes.string.isRequired,  
  title: PropTypes.string.isRequired,     
  description: PropTypes.string.isRequired, 
  imagePosition: PropTypes.oneOf(['left', 'right']),
  additionalClass: PropTypes.string,      
};

InfoCard.defaultProps = {
  imagePosition: 'left',    
  additionalClass: '',      
};

export default InfoCard;




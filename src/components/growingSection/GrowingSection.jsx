import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import './GrowingSection.css';

const GrowingSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect(); // Dejar de observar una vez que ya contamos
          }
        });
      },
      {
        threshold: 1 // El 100% de la sección debe estar visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container fluid className="growing-section text-center " ref={sectionRef}>
      <h2 className="title-section">Poco a poco vamos creciendo</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, iste. Quo, quia id provident nobis, voluptas aliquid fugit tempore, non magni alias voluptatem? Sit excepturi 
        aspernatur molestiae soluta unde ratione?
        Eos nulla laboriosam ratione vel illo dolores hic. 
        Aliquid assumenda dolor doloribus sequi quibusdam ipsum magnam debitis. 
        Consectetur ipsum tenetur dolorum commodi soluta itaque, odio nulla.</p>
      <Row className="justify-content-center">
        {/* Primera caja: Comercios */}
        <Col md={3} className="growing-box mx-3">
          <h3>Comercios</h3>
          <div className="count">
            {startCounting && <CountUp end={30} duration={3} />}
          </div>
        </Col>
        {/* Segunda caja: Personas */}
        <Col md={3} className="growing-box mx-3">
          <h3>Personas</h3>
          <div className="count">
            {startCounting && <CountUp end={3500} duration={3} />}
          </div>
        </Col>
        {/* Tercera caja: Servicios */}
        <Col md={3} className="growing-box mx-3">
          <h3>Servicios</h3>
          <div className="count">
            {startCounting && <CountUp end={10} duration={3} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GrowingSection;

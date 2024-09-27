import { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [hovered, setHovered] = useState(false);

  const handleOver = () => {
    setHovered(true); // Cambia a 'true' al hacer hover
  };
  const handleOut = () => {
    setHovered(false); // Cambia a 'false' al salir del hover
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/plaza-pormetxeta1.jpg" className="d-block w-100" alt="Plaza PORmetxeta" />
        </div>
        <div className="carousel-item">
          <img src="/assets/plaza-desierto2.jpg" className="d-block w-100" alt="Plaza Desierto" />
        </div>
        <div className="carousel-item">
          <img src="/assets/desertu berria0.jpg" className="d-block w-100" alt="Barrio Desierto" />
        </div>
      </div>

      {/* Textos superpuestos */}
      <div className="carousel-text" onMouseOver={handleOver} onMouseOut={handleOut}>
        <div className={`interactive-text1 ${hovered ? 'show' : 'hide'}`}>
          <span className="carousel-subtitle1">Bienvenido</span>
          <h1 className="carousel-title">Desertu Berria</h1>
          <span className="carousel-subtitle2">
            Asociación de vecinos del barrio Desierto de Barakaldo
          </span>
        </div>
        <div className={`interactive-text2 ${!hovered ? 'show' : 'hide'}`}>
          <span className="carousel-subtitle1">Ongi etorri</span>
          <h1 className="carousel-title">Desertu Berria</h1>
          <span className="carousel-subtitle2">
            Barakaldoko Desertu auzoko bizilagunen elkartea
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;



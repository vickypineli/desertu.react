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
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/assets/desertu berria0.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/assets/plaza-desierto2.jpg" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/assets/plaza-desierto1.png" className="d-block w-100" alt="Imagen 3" />
        </div>
        <div className="carousel-item">
          <img src="/assets/plaza-pormetxeta.jpg" className="d-block w-100" alt="Imagen 4" />
        </div>
      </div>

      {/* Botones de control del carrusel */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

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



// src/components/home/Home.jsx
// import React from 'react';

import Carousel from '../carousel/Carousel';
import './Home.css';
import AboutBox from '../aboutBox/AboutBox';

function Home() {
  return (
    <>
      <Carousel />
      <AboutBox />
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h3>Eventos</h3>
            <p>Consulta nuestros próximos eventos y actividades.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Documentos</h3>
            <p>Accede a documentos importantes de nuestra asociación.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Contacto</h3>
            <p>Ponte en contacto con nosotros para más información.</p>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Home;

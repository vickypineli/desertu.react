// src/pages/activitiesPage/ActivitiesPage.jsx

import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../../components/infoCard/InfoCard";
//import InfoCard from '../components/infoCard/InfoCard'; // Ajusta la ruta según tu estructura de carpetas

const ActivitiesPage = () => {
  return (
    <Container>
      <h1>Actividades</h1>
      {/* Aquí puedes incluir uno o más componentes InfoCard */}
      <InfoCard
        imageUrl="/assets/desertu_aereo.png"
        imageAlt="Imagen del Barrio"
        title="Santa Agueda"
        description="Somos una asociación de vecinos y vecinas ubicada en el barrio Desertu-Urban del municipio de Barakaldo."
        imagePosition="left" // Puedes cambiarlo a "right" si lo deseas
      />
      <InfoCard
        imageUrl="/assets/otra_imagen.png" // Cambia esta URL por otra imagen que quieras mostrar
        imageAlt="Otra Imagen"
        title="Desertuko jaiak"
        description="Participa en nuestras actividades y eventos comunitarios para fortalecer la convivencia."
        imagePosition="right" // Puedes cambiarlo a "left" si lo deseas
      />
      <InfoCard
        imageUrl="/assets/otra_imagen.png" // Cambia esta URL por otra imagen que quieras mostrar
        imageAlt="Otra Imagen"
        title="Putxera Eguna"
        description="Participa en nuestras actividades y eventos comunitarios para fortalecer la convivencia."
        imagePosition="left" // Puedes cambiarlo a "left" si lo deseas
      />
      <InfoCard
        imageUrl="/assets/otra_imagen.png" // Cambia esta URL por otra imagen que quieras mostrar
        imageAlt="Otra Imagen"
        title="Gabonak"
        description="Participa en nuestras actividades y eventos comunitarios para fortalecer la convivencia."
        imagePosition="right" // Puedes cambiarlo a "left" si lo deseas
      />
      <Row>
        <Col xs={12}>
          Si quieres estar mas informado sobre las actividades puedes seguirnos en nuestras redes sociales.
        </Col>
        <Col xs={12}>
          <a href="https://www.facebook.com/Desertu-Urban-107189834591138" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/desertu.urban/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" />
          </a>
        </Col>
      </Row>

    </Container>
  );
};

export default ActivitiesPage;


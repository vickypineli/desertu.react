// src/components/contact/Contact.jsx

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactPage.css';

function ContactPage() {
  return (
    <Container fluid className="contact-container my-5">
      <h2 className="text-center ">Contacto</h2>
      <p>Ponte en contacto con nosotras para cualquier consulta o dudas.</p>
      <Row className="align-items-center">
        {/* Columna izquierda: Mapa */}
        <Col md={6} className="mb-4 mb-md-0">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5807.266086477106!2d-2.986400423435648!3d43.30100587513787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a64b09ae301%3A0x856b20023c6fec81!2sEl%20Desierto%20Plaza%2C%2048901%20Barakaldo%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1727979470396!5m2!1ses!2ses"
              width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </Col>

        {/* Columna derecha: Formulario de Contacto */}
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Introduce tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Introduce tu correo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tu mensaje aquí" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;



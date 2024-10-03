// src/pages/registerPage/RegisterPage.jsx

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './RegisterPage.css';

function RegisterPage() {
    return (
        <Container fluid className="register-container my-5">
            <h2 className="text-center ">Registrarse</h2>
            <p>Por favor, rellene el siguiente formulario para crear una cuenta.</p>
            <Row className="align-items-center">
                {/* Columna izquierda: Formulario */}
                <Col md={6} className="mb-4 mb-md-0">
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Introduce tu nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Introduce tu contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Crear cuenta
                        </Button>
                    </Form>
                </Col>  
            </Row>
        </Container>
    );
}

export default RegisterPage;

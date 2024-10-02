// src/components/footer/Footer.jsx

import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-6 text-center">
            <h5>Contacto</h5>
            <p>Email: kaixo@desertuberria.com</p>
            <p>Teléfono: +34 123 456 789</p>
          </div>
          <div className="col-md-6 text-center text-md-center">
            <h5>Síguenos</h5>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Desertu Berria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


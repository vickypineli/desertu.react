//components/Modal.js
import PropTypes from 'prop-types';
import './Modal.css'; // Importar estilos del modal

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se muestra

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-container">
        <div className="modal-header">
         
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,        // Prop booleana obligatoria
    onClose: PropTypes.func.isRequired,       // Función obligatoria
    title: PropTypes.string.isRequired,       // String obligatorio
    description: PropTypes.string.isRequired, // String obligatorio
  };
export default Modal;
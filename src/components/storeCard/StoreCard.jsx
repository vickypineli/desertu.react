// src/components/servidesCard/ServidesCard.jsx
// import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import './StoreCard.css'; // Importar estilos del componente

const StoreCard = ({ store }) => {
  return (
    <div className="card">
      <img src={store.image} className="card-img-top" alt={store.name} />
      <div className="card-body">
        <h5 className="card-title">{store.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{store.category}</h6>
        <p className="card-text">{store.description}</p>
        <p className="card-text"><strong>Contacto:</strong> {store.contact}</p>
      </div>
    </div>
  );
};

// Definir las validaciones de las props
StoreCard.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoreCard;


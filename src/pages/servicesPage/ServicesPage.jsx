// src/components/stores/Stores.jsx
// import React from 'react';
import storesData from '../../data/StoresData';
import StoreCard from '../../components/storeCard/StoreCard'; // Importar el componente StoreCard
import './ServicesPage.css'; // Importar estilos del componente

function ServicesPage() {
  return (
    <div className="container-fluid">
      <h2 className="text-center">Tiendas del Barrio</h2>
      <div className="row">
        {storesData.map((store, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <StoreCard store={store} /> {/* Pasar cada tienda al componente StoreCard */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;

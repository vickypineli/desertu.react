// src/App.jsx
// import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import Documents from './components/documents/Documents';
import './index.css'; // Importa los estilos globales
import './App.css'; // Importa los estilos de la app

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Events />
      <Contact />
      <Documents />
      <Footer />
    </div>
  );
}

export default App;


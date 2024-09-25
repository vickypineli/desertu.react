// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import Documents from './components/documents/Documents';
import Stores from './components/stores/Stores';
import './index.css'; // Importa los estilos globales
import './App.css'; // Importa los estilos de la app

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/stores" element={<Stores />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// src/App.jsx
// import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ActivitiesPage from './pages/activitiesPage/ActivitiesPage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';
import BlogPage from './pages/blogPage/BlogPage';

import Stores from './components/stores/Stores';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.css'; // Importa los estilos globales
import './App.css'; // Importa los estilos de la app

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />      
        <Route path="/stores" element={<Stores />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


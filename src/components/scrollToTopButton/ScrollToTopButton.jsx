// src/components/scrollToTopButton/ScrollToTopButton.jsx

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    // Hook para manejar la visibilidad del botón basado en el scroll
    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };
        // Añadir el event listener para escuchar el evento de scroll
        window.addEventListener('scroll', toggleVisibility);
        // Limpiar el event listener al desmontar el componente
            return () => window.removeEventListener('scroll', toggleVisibility);
        }, []);

        // Función para desplazar hacia la parte superior de la página
    const scrollToTop = () => {
        console.log("Scroll hacia arriba"); // Log para confirmar la ejecución
        window.scrollTo({
        top: 0,
        behavior: 'smooth', // Desplazamiento suave
        });
    };

  // Renderizar el componente
  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FaArrowUp />
        </button>
      )}
    </div>
  );

}
export default ScrollToTopButton;
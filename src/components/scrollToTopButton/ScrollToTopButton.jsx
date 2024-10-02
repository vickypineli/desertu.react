// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    console.log("Scroll hacia arriba");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-button ${isVisible ? 'slide-in' : 'slide-out'}`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;

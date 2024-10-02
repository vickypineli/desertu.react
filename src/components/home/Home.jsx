// src/components/home/Home.jsx

import Carousel from '../carousel/Carousel';
import AboutBox from '../aboutBox/AboutBox';
import ContactSection from '../contactSection/ContactSection';
import './Home.css';
import InfoSection from '../infoSection/InfoSection';
import GrowingSection from '../growingSection/GrowingSection';
import ScrollToTopButton from '../scrollToTopButton/ScrollToTopButton';


function Home() {
  return (
    <>
      <Carousel />
      <AboutBox />
      <GrowingSection />
      <InfoSection />
      <ContactSection />
      <ScrollToTopButton />
    </>
    
  );
}

export default Home;

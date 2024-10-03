// src/components/home/Home.jsx

import Carousel from '../../components/carousel/Carousel';
import AboutBox from '../../components/aboutBox/AboutBox';
import ContactSection from '../../components/contactSection/ContactSection';
import InfoSection from '../../components/infoSection/InfoSection';
import GrowingSection from '../../components/growingSection/GrowingSection';
import ScrollToTopButton from '../../components/scrollToTopButton/ScrollToTopButton';
import './Home.css';


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

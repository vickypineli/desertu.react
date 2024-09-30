// src/components/home/Home.jsx

import Carousel from '../carousel/Carousel';
import AboutBox from '../aboutBox/AboutBox';
import ContactSection from '../contactSection/ContactSection';
import './Home.css';
import InfoSection from '../infoSection/InfoSection';


function Home() {
  return (
    <>
      <Carousel />
      <AboutBox />
      <InfoSection />
      <ContactSection />
    </>
    
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import Body from './Body';
import Feature from './Feature';
import imagelogo from "../assets/what'sapplogo.jpg";
import Footer from './Footer';
import Film from './Film';

const Home = () => {
  const phoneNumber = '+918810422460';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          className="fixed bottom-5 right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full z-50"
          src={imagelogo}
          alt="WhatsApp Logo"
        />
      </a>

      {showPopup && (
        <div className="fixed bottom-20 md:bottom-24 right-8 bg-green-700 text-white px-4 py-2 rounded-md shadow-lg animate-bounce">
          Chat Us
        </div>
      )}

      <Body />
      <Feature />
      <Film />
      <Footer />
    </div>
  );
};

export default Home;

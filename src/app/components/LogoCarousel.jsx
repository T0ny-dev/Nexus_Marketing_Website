import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    './era.png', // Replace with actual paths to your logo images
    './codeartisan.png',
    './tinket.png',
    './dirt.png',
    './rent.png',
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`}/>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index + logos.length}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

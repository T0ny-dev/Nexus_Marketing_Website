import React from 'react';
import './LogoCarouselLeft.css';

const LogoCarouselLeft = () => {
  const logos = [
    './dr.patricia.png', // Replace with actual paths to your logo images
    './rb.png',
    './parabole.png',
    './trattoria.png',
    './vero.png',
    './akdemy.png',
  ];

  return (
    <div className="carousel-container-left">
      <div className="carousel-track-left">
        {logos.map((logo, index) => (
          <div className="carousel-item-left" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`}/>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="carousel-item-left" key={index + logos.length}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarouselLeft;

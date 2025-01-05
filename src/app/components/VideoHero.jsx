import React from 'react';
import './VideoHero.css';

const VideoHero = () => {
  return (
    <div className="video-hero-container">
      <video autoPlay loop muted className="background-video" alt="video reynosa Nexus IA">
        <source src="/abour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Agencia IA Marketing</h1>
        <p className='p_video'>Utilizamos tecnología, marketing digital e inteligencia artificial para acelerar tu transformación digital.</p>
        <a href="/chatnexus">
        <button id="cta-button">Conoce ChatNexus IA</button>
        </a>
      </div>
    </div>
  );
};

export default VideoHero;

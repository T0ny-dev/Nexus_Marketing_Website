import React from 'react';
import './VideoHero.css';

const VideoHero = () => {
  return (
    <div className="video-hero-container">
      <video autoPlay loop muted className="background-video" alt="video reynosa Nexus IA">
        <source src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/hero_nexus.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9oZXJvX25leHVzLm1wNCIsImlhdCI6MTcxNjQxMjQzMSwiZXhwIjoxNzQ3OTQ4NDMxfQ.GOcKOrinDg9hVzt2hQxdmEal2hMFcZ9wQ3V26ZysMuQ&t=2024-05-22T22%3A12%3A21.582Z" type="video/mp4" />
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

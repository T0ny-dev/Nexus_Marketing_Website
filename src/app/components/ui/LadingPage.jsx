import React from 'react';
import './LadingPage.css'; // Archivo CSS para estilos

function LandingPage({ title, subtitle, services }) {
  return (
    <div className="landing-page">
      {/* Sección de Servicios */}
      <div className="services">
        <h2>Contiene:</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Otras secciones de la página */}
      {/* ... */}

    </div>
  );
}

export default LandingPage;

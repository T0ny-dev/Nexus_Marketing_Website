import React from 'react';
import './Footer.css'; // Importa el archivo CSS para estilos
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Primer div */}
        <div className="footer__section">
          <img src="/logo-agencia.svg" alt="Logo" className="footer__logo" />
          <p>Explora una nueva dimensión en el Marketing Digital con el respaldo de nuestro ChatNexus IA y las mejores plataformas en Inteligencia Artificial. Nexus Marketing, ubicada en Reynosa, Tamaulipas, será tu aliado estratégico en este proceso.</p>
          <div className="footer__social-icons">
            {/* Iconos de redes sociales */}
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        {/* Segundo div */}
        <div className="footer__section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="/chatnexus">ChatNexus IA</a></li>
            <li><a href="/academy">Academia</a></li>
            <li><a href="/planes">Planes 360° Marketing</a></li>
            <li><a href="https://www.behance.net/agencia-nexus" target='_blank'>Portafolio Behance</a></li>
          </ul>
        </div>
        {/* Tercer div */}
        <div className="footer__section">
          <h3>Contacto</h3>
          <p>Reynosa, Tamaulipas, MX.</p>
          <p>Dirección: Calle Ejemplo, 123</p>
          <p>Teléfono: +52 899 456 1010</p>
          <p>Correo: ejemplo@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client"
import React, { useState } from 'react';
import './NavbarMobiles.css';

function NavbarMobiles() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicios = () => {
    setServiciosOpen(!serviciosOpen);
  };

  const toggleRecursos = () => {
    setRecursosOpen(!recursosOpen);
  };

  return (
    <div className="Navbarmobile">
      <a href="/">
        <img src="./Nexus-logo.svg" alt="" />
      </a>
      <img src="/lines_1.svg" alt="" id="menu" onClick={toggleMenu} />

      {menuOpen && (
        <div className="mobile-menu active">
          <ul>
            <li><a href="https://www.chat.agencianexusmarketing.com/" target="_blank">Iniciar Sesión</a></li>
            <hr  className='divisor'/>
            <li onClick={toggleServicios} id='services_link'>Servicios</li>
            {serviciosOpen && (
              <ul>
                <li><a href="/diseno-de-marca" >Diseño de Marca</a></li>
                <li><a href="/diseno-web" >Diseño Web</a></li>
                <li><a href="/video" >Video</a></li>
                <li><a href="/marketing-digital" >Marketing Digital</a></li>
                <li><a href="/redes-sociales" >Redes Sociales</a></li>
                <li><a href="/consultoria-chatnexus-ia" >Consultoría ChatNexus IA</a></li>
                <li><a href="/marketing-para-academias" >Marketing para academias</a></li>
              </ul>
            )}
            <hr  className='divisor'/>
            <li onClick={toggleRecursos} id="services_link">Recursos</li>
            {recursosOpen && (
              <ul>
                <li><a href="https://medium.com/@agencia.nexus.marketing">Blog</a></li>
                <li><a href="https://academy.agencianexusmarketing.com/">Academia</a></li>
                <li><a href="https://agencia-nexus-marketing.notion.site/Presentaci-n-372754cdab1748d79afbe17f00f887bb">Notion Nexus</a></li>
              </ul>
            )}
            <hr  className='divisor'/>
            <li><a href="https://www.behance.net/agencia-nexus" target="_blank">Portafolio de Behance</a></li>
            <hr  className='divisor'/>
            <li><a href="/planes">Planes 360° Marketing</a></li>
            <hr  className='divisor'/>
            <li><a href="/chatnexus">ChatNexus IA</a></li>
            <hr  className='divisor'/>
            <li id='contacto_margin'><a href="/contacto" class="button__primary">Contacto</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarMobiles;

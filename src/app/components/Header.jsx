"use client"
import React, { useState } from "react";
import Button from "@/app/components/ui/Button";
import "./Header.css";

function Header() {
  const [showServices, setShowServices] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const handleServicesClick = () => {
    setShowServices(!showServices);
  };

  const handleResourcesClick = () => {
    setShowResources(!showResources);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img src="./Nexus-logo.svg" alt="logotipo nexus" className="logo" />
        </a>
        <ul className="header__links">
          <li onClick={handleServicesClick}>
            Soluciones
          </li>
          <li id="resource_link_simbol">
            <a href="#" onClick={handleResourcesClick}>Recursos</a>
            {showResources && (
              <ul className="resource__list">
                <li><a href="https://nexus-todos-app.netlify.app/" target="_blank">Todo List App</a></li>
                <li><a href="https://medium.com/@agencia.nexus.marketing" target="_blank">Blog</a></li>
                <li><a href="https://academy.agencianexusmarketing.com/">Academia</a></li>
                <li><a href="https://agencia-nexus-marketing.notion.site/Presentaci-n-372754cdab1748d79afbe17f00f887bb" target="_blank">Notion Nexus</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="https://www.behance.net/agencia-nexus" target="_blank">Portafolio</a>
          </li>
          <li>
            <a href="/planes">Planes 360°</a>
          </li>
          <li className="nexus_ia_beta">
            <a href="/chatnexus">ChatNexus IA</a>
          </li>
        </ul>
      </div>
      <div className="header__button">
        <a target="_blank" href="https://chat.agencianexusmarketing.com/">
          Iniciar sesión <img src="./flecha.svg" alt="" className="flecha" />
        </a>
        <a href="/contacto" style={{textDecoration:"none"}} id="contacto">
          <Button text="Contacto" />
        </a>
      </div>
      {showServices && (
        <div className="services__popup">
          <button className="close__button" onClick={handleServicesClick}>
            X
          </button>
          <div className="service__item">
            <img src="academy_nexus.png" alt="Service 1" />
            <a href="https://academy.agencianexusmarketing.com/" target="_blank">
            <button id="consult">Academia <img src="/arrow.png" alt="arrow"/></button>
            </a>
          </div>
          <div className="service__item">
            <h3>Soluciones</h3>
            <ul>
              <li><a href="/diseno-de-marca" id="diseño-marca">Diseño de marca</a></li>
              <li><a href="/diseno-de-paginas-web" id="diseño-web">Diseño de páginas web</a></li>
              <li><a href="/desarrollo-web" id="diseño-web">Desarrollo web</a></li>
              <li><a href="/video" id="video-web">Video</a></li>
              <li><a href="/marketing-digital" id="web-marketing">Marketing Digital</a></li>
              <li><a href="/gestion-de-redes-sociales" id="rss">Gestión de redes sociales</a></li>
              <li><a href="/communty-manager" id="rss">Community Manager</a></li>
              <li><a href="/consultoria-chatnexus-ia" id="ia-m">Consultoría ChatNexus IA</a></li>
              <li><a href="/marketing-para-academias" id="ac">Marketing para academias</a></li>
              <li><a href="/chatbots" id="ia-m">Chatbots</a></li>
              <li><a href="/menu-digital" id="diseño-web">Menús digitales</a></li>
              <li><a href="/tarjeta-digitales" id="diseño-web">Tarjetas Digitales</a></li>
              <li><a href="/videos-con-dron" id="video-web">Videos con dron</a></li>
            </ul>
          </div>
          <div className="service__item-3">
            <img src="/ia_nexus.webp" alt="Service 2" />
            <h3 id="ia">Inteligencia Artificial en Marketing</h3>
            <a id="ia_link" href="/chatnexus">Descubre ChatNexus IA</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;


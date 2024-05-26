"use client"

import Title from "../components/ui/Title";
import MoreServices from "../components/MoreServices";
import Hero from "../components/Hero";
import LandingPage from "../components/ui/LadingPage";
import "./page.css"
import PricingPackage from "../components/ui/Pricing";
import Questions from "../components/Questions";
import Video from "../components/ui/Video";

function Planes () {

  const services = [
    {
      title: 'Propuesta visual',
      description: 'Proponer UI /UX',
    },
    {
      title: 'Asesoría',
      description: 'Análisis de requerimientos',
    },
    {
      title: 'Diseño de flujo',
      description: 'Contestaciones automáticas',
    },
    {
      title: 'Desarrollo de bot',
      description: 'Planes flexibles',
    },

    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Chatbots</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Automatice sus respuestas de redes sociales</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container-icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-web" style={{ backgroundImage: `url("/bot-m.png")` }}>
        </div>
      </div>
      <Title text={"Sitios Web"}/>
    <div className="Princing">
      <PricingPackage
        name="Desarrollo de bot"
        description="Contestaciones automáticas"
        price="Cotizar"
        features={[
          'Análisis de requerimientos.',
          'Propuesta de flujo de contestaciones.',
        ]}
      />

    </div>
    <div className="letter">
      <p>Todos nuestros los planes requieren de un NDA (acuerdo de confidencialidad y no divulgación de información)*.</p>
    </div>
    <LandingPage
        services={services}
      />
    <MoreServices/>
    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;
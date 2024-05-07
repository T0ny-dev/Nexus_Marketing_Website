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
      title: 'Análisis de Mercado y Competencia',
      description: ' Utilizando datos y tendencias actuales, identificamos oportunidades clave para el crecimiento y las amenazas potenciales.',
    },
    {
      title: 'Estrategia de Posicionamiento y táctica',
      description: 'A través de un análisis detallado de tu audiencia objetivo y los canales de mercado, identificamos las mejores oportunidades para posicionar tu marca de manera efectiva.',
    },
    {
      title: 'Plan de Comunicación y Promoción',
      description: 'Desde la selección de canales hasta el desarrollo de contenido, nuestro enfoque estratégico garantiza que tu mensaje llegue a las personas adecuadas en el momento adecuado.',
    },
    {
      title: 'Posicionamiento:',
      description: 'Desde la creación de contenido hasta la optimización de la experiencia del usuario, trabajamos para garantizar que tu marca sea reconocida y valorada por tu audiencia.',
    },
    {
      title: 'Growth Marketing',
      description: 'Con el Growth Marketing, transformamos los desafíos en oportunidades y llevamos tu negocio al siguiente nivel de éxito.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Mercadotecnia Digital</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Conoce una nueva forma de hacer Marketing Digital con el uso de nuestro chatbot de Inteligencia Artificial. Nexus Marketing será tu agencia aliada en este proceso.</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container-icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container" style={{ backgroundImage: `url("/marker.webp")` }}>
        </div>
      </div>
      <Title text={"Marketing Digital"}/>
    <div className="Princing">
    <PricingPackage
        name="Plan de Marketing Digital"
        description="Perfecto para pequeñas empresas o proyectos personales."
        price="$2,100 MXN"
        features={[
          'Análisis de Mercado y Competencia.',
          'Estrategia de Posicionamiento y táctica.',
          'Plan de Comunicación y Promoción.',
          'Posicionamiento.',
        ]}
      />

    </div>
    <div className="letter">
      <p>En todos los servicios se entregan los materiales generados y el acuerdo de propiedad intelectual*</p>
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
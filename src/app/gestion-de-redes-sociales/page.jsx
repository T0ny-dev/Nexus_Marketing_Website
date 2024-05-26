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
      title: 'Administración de redes',
      description: 'Análisis Inicial y Estrategia de Redes Sociales',
    },
    {
      title: 'Publicaciones',
      description: 'Calendario',
    },
    {
      title: 'Chatbot',
      description: 'Respuestas automáticas',
    },
    {
      title: 'Contenido Creativo',
      description: 'Línea gráfica de publicaciones',
    },
    {
      title: 'Contenido propio',
      description: 'Diseño en fotografías y videos.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Gestión de redes sociales</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Potencia tu presencia en redes sociales con nuestro servicio. Creamos contenido atractivo y gestionamos tus redes con contenido.</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container-icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-web" style={{ backgroundImage: `url("/phone.png")` }}>
        </div>
      </div>
      <Title text={"Sitios Web"}/>
    <div className="Princing">
      <PricingPackage
        name="1 red social"
        description="Facebook"
        price="1,679 MXN"
        features={[
          '3 publicaciónes por semana. ',
          'Diseño en fotografías y videos.',
          'Respuesta a inbox de Lunes a Viernes de 9 am a 5 pm. -(Chatbot).',
        ]}
      />
      <PricingPackage
        name="2 redes sociales"
        description="Facebook e Instagram"
        price="2,079 MXN"
        features={[
          '3 publicaciónes por semana. ',
          'Diseño en fotografías y videos.',
          'Respuesta a inbox de Lunes a Viernes de 9 am a 5 pm. -(Chatbot).',
        ]}
      />
      <PricingPackage
        name=" 2 redes sociales + WhatsApp"
        description="Facebook e Instagram + WhatsApp"
        price="2,890 MXN"
        features={[
          '3 publicaciónes por semana. ',
          'Diseño en fotografías y videos.',
          'Respuesta a inbox de Lunes a Viernes de 9 am a 5 pm. -(Chatbot).',
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
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
      title: 'Stack',
      description: 'Asesoría en su stack tecnológico',
    },
    {
      title: 'Hosting',
      description: 'hosting confiable y seguro garantiza que tu sitio web esté siempre en línea y disponible para tus clientes.',
    },


    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Tarjeta Digital</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Potencia tu presencia en linea y formalidad con tu presentación virtual con tu tarjeta</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container-icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-web" style={{ backgroundImage: `url("/tarjetas-g.png")` }}>
        </div>
      </div>
      <Title text={"Sitios Web"}/>
    <div className="Princing">
      <PricingPackage
        name="Tarjeta Digital"
        description="Personalizadas"
        price="Cotizar"
        features={[
          'Diseño en PVC.',
          'Propuesta Visual.',
          'Despliegue de solución en línea.',
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
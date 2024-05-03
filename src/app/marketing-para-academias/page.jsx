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
      title: 'Análisis y Plan Estratégico',
      description: 'Realizamos un análisis detallado de tu situación actual y desarrollamos un plan estratégico',
    },
    {
      title: 'Diseño y Desarrollo de Contenido',
      description: 'No tienes equipo ni orientacion no te preocupes tambien apoyamos',
    },
    {
      title: 'Campañas de Publicidad Digital',
      description: 'Diseñamos y ejecutamos campañas publicitarias digitales ',
    },
    {
      title: 'Plataforma Educativa',
      description: 'Desarrollamos una plataforma educativa completa y personalizada',
    },

    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Academias</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Ofrecemos un servicio integral de apoyo para la creación de academias digitales. Desde la planificación inicial hasta la implementación, nuestro equipo experto te guiará en cada paso del proceso. Con soluciones personalizadas y asesoramiento especializado, te ayudamos a llevar tu visión educativa al mundo digital de manera efectiva y exitosa</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container" style={{ backgroundImage: `url("/academy.webp")` }}>
        </div>
      </div>
      <Title text={"Asesoria educativa"}/>
    <div className="Princing">
    <PricingPackage
        name="Tu proyecto de educacion"
        description="Inicia tu academia personal y democraticemos la educacion por un valor simbolico"
        price="Cotizar"
        features={[
          'Asesoria',
          'Propuesta de plataforma educativa',
          'Apoyo en la elaboracion de capacitaciones',
          'Pagos online',
          'Capacitacion para uso de plataforma',
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
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
      title: 'Análisis Inicial y Estrategia de Redes Sociales',
      description: 'creamos una estrategia personalizada para maximizar tu presencia en línea.',
    },
    {
      title: 'Calendario',
      description: 'Desarrollamos un calendario de publicaciones estratégicas para mantener una presencia constante en tus redes sociales.',
    },
    {
      title: 'Contenido Creativo',
      description: ' Desde imágenes llamativas hasta videos envolventes, cada pieza está diseñada para destacar en las redes sociales.',
    },
    {
      title: 'Interacción y Participación',
      description: 'Mantenemos una conexión cercana con tus seguidores para construir relaciones sólidas y lealtad hacia tu marca.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Redes Sociales</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Potencia tu presencia en redes sociales con nuestro servicio. Creamos contenido atractivo y gestionamos campañas publicitarias para conectar con tu audiencia. Imagina 100 anuncios generados en 15 minutos para impulsar tu marca al siguiente nivel.</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container-icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-rss" style={{ backgroundImage: `url("/redes.webp")` }}>
        </div>
      </div>
      <Title text={"Social Media"}/>
    <div className="Princing">
    <PricingPackage
        name="Redes Sociales Básico"
        description="Perfecto para pequeñas empresas o proyectos personales."
        price="$9,999 MXN/mes"
        features={[
          "Redes: Facebook e Instagram.",
          'Creación de 7 Copys.',
          'Diseño de Portada y foto.',
          'Diseño 7 Post.',
          'Configuración Inicial: $5,000.00 adicionales solo el primer mes.',
          "Programación de Posts en horario relevante para público.",
          "Revisión y configuración de RRSS.",
          "Creación de Campaña en Fb e Instagram."
        ]}
      />

      <PricingPackage
        name="Plus"
        description="Ideal para empresas medianas con necesidades más avanzadas."
        price="$14,999 MXN/mes"
        features={[
          "Redes: Facebook, Instagram, Linkedin y X.",
          'Creación de 15 Copys.',
          'Diseño de Portada y foto.',
          'Diseño 15 Post.',
          'Diseño 7 Historias.',
          "4 Videos de hasta 15 segundos Reels.",
          'Configuración Inicial: $5,000.00 adicionales solo el primer mes.',
          "Programación de Posts en horario relevante para público.",
          "Gestión de preguntas y respuestas automaticas.",
          "Revisión y configuración de RRSS."
        ]}
      />

      <PricingPackage
        name="Deluxe"
        description="Para empresas que necesita un equipo en marketing continuo."
        price="$19,999 MXN/mes"
        features={[
          "Redes: Facebook, Instagram, Linkedin, X, Youtube y Tiktok.",
          'Creación de 30 Copys.',
          "Diseño de Portada y foto.",
          'Diseño 30 Post.',
          'Diseño 15 Historias.',
          '4 Videos de hasta 15 segundos Reels.',
          "Manejo de redes sociales.",
          "4 Videos Editados de hasta 4 Minutos Reels o FHD.",
          'Configuración Inicial: $5,000.00 adicionales solo el primer mes.',
          "Programación de Posts en horario relevante para público.",
          "Respuestas a Mensajes y Comentarios.",
          "Revisión y configuración de RRSS.",
          "Análisis de campañas con IA."
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
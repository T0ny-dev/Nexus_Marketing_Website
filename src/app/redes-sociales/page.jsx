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
      description: ' Desde imágenes llamativas hasta videos envolventes, cada pieza está diseñada para destacar en las redes sociales',
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
        <div className="logo-container">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container" style={{ backgroundImage: `url("/redes.webp")` }}>
        </div>
      </div>
      <Title text={"Social Media"}/>
    <div className="Princing">
    <PricingPackage
        name="Diseño de logotipo"
        description="Perfecto para pequeñas empresas o proyectos personales."
        price="$350 MXN"
        features={[
          'Consultoria ChatNexus IA',
          'Fotografia para productos / personas',
          'Videos Promocionales',
          'Web basica (4 secciones / one pager)',
        ]}
      />

      <PricingPackage
        name="Plus"
        description="Ideal para empresas medianas con necesidades más avanzadas."
        price="$6,999 MXN/mes"
        features={[
          'Consultoria ChatNexus IA',
          'Fotografia para productos / personas',
          'Videos Promocionales',
          'Web (6 secciones)',
        ]}
      />

      <PricingPackage
        name="Deluxe"
        description="Para empresas que necesita un equipo en marketing continuo."
        price="$7,999 MXN/mes"
        features={[
          'Consultoria ChatNexus IA',
          "Acceso a ChatNexus IA",
          'Fotografia para productos / personas',
          'Videos Promocionales',
          'Web personalizada',
          "Manejo de redes sociales"
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
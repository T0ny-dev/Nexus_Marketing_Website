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
      title: 'Estrategia de Posicionamiento y tactica',
      description: 'A través de un análisis detallado de tu audiencia objetivo y los canales de mercado, identificamos las mejores oportunidades para posicionar tu marca de manera efectiva',
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
      <Hero 
            title={"Mercadotecnia Digital"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"Conoce una nueva forma de hacer Marketing Digital con el uso de nuestro chatbot de Inteligencia Artificial. Nexus Marketing será tu agencia aliada en este proceso."}
            image={"/marker.png"}
      />
      <Title text={"Marketing Digital"}/>
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
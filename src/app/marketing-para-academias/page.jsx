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
      <Hero 
            title={"Academias"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"Ofrecemos un servicio integral de apoyo para la creación de academias digitales. Desde la planificación inicial hasta la implementación, nuestro equipo experto te guiará en cada paso del proceso. Con soluciones personalizadas y asesoramiento especializado, te ayudamos a llevar tu visión educativa al mundo digital de manera efectiva y exitosa"}
            image={"/academy.png"}
      />
      <Title text={"Plataformas educativas"}/>
    <div className="Princing">
    <PricingPackage
        name="Plan compartido"
        description="Perfecto para colaborar con Agencia Nexus Marketing, democraticemos la educacion por un valor simbolico"
        price="Plan de ingresos por usuario"
        features={[
          'Consultoria ChatNexus IA',
          'Plataforma educativa',
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
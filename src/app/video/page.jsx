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
      title: 'Propuesta de Idea de Video',
      description: 'Desde la concepción hasta la ejecución, te ayudamos a crear videos impactantes que conecten con tu audiencia.',
    },
    {
      title: 'Edición',
      description: ' Nuestro equipo de edición experto se encarga de pulir y mejorar cada detalle para garantizar un resultado profesional y cautivador.',
    },
    {
      title: 'Correcciones',
      description: ' Con un enfoque meticuloso, corregimos errores y optimizamos la calidad para garantizar que tu mensaje se transmita de manera efectiva',
    },
    {
      title: 'Video',
      description: 'Ya sea para promocionar tu marca, contar una historia o capturar momentos especiales, estamos aquí para ayudarte a crear contenido visual impactante.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <Hero 
            title={"Video"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"Potencia tu presencia en línea con nuestro servicio de video. Desde la producción hasta la edición, ofrecemos soluciones completas para dar vida a tu mensaje. ¡Destaca en el mundo digital con contenido audiovisual de calidad!"}
            image={"/video.png"}
      />
      <Title text={"Video Contenido"}/>
    <div className="Princing">
    <PricingPackage
        name="Video Básica"
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
        name="Video Plus"
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
        name="Video Deluxe"
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
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
      title: 'Análisis y Recomendaciones Iniciales',
      description: 'Este análisis inicial es fundamental para entender tus necesidades y objetivos.',
    },
    {
      title: 'Plan Estratégico',
      description: 'Este plan proporciona una hoja de ruta clara y efectiva para guiar tus esfuerzos de marketing.',
    },
    {
      title: 'Desarrollo de Propuestas',
      description: 'Desde campañas publicitarias hasta contenido de redes sociales, nuestras propuestas están diseñadas para destacar en el mercado.',
    },
    {
      title: 'Consulta de Datos',
      description: 'Nuestra consulta de datos proporciona información valiosa que impulsa el éxito de tus iniciativas digitales."',
    },

    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <Hero 
            title={"Consultoría"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"Optimiza tu estrategia de marketing digital con nuestra consultoría especializada. Con ChatNexus IA, en solo 15 minutos, analizamos tu plan y desarrollamos estrategias digitales efectivas para potenciar tu presencia en línea."}
            image={"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/iPhone%2013.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9pUGhvbmUgMTMucG5nIiwiaWF0IjoxNzEzOTIwNzc1LCJleHAiOjE3NDU0NTY3NzV9.15q-nwjkeTLj9x4rhvlk6Mb_hHLLjysz6eszRkZ0psY&t=2024-04-24T02%3A05%3A32.910Z"}
      />
      <Title text={"ChatNexus IA"}/>
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
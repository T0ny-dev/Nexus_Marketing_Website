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
      description: 'Desde la selección de colores hasta el diseño de elementos gráficos, cada detalle está cuidadosamente pensado para reflejar la identidad de tu marca',
    },
    {
      title: 'Palabras Clave',
      description: 'Optimizamos tu sitio web con las palabras clave más relevantes para tu industria, aumentando su visibilidad en los motores de búsqueda y atrayendo a tu público objetivo de manera efectiva. ',
    },
    {
      title: 'Hosting',
      description: 'hosting confiable y seguro garantiza que tu sitio web esté siempre en línea y disponible para tus clientes.',
    },
    {
      title: 'Dominio',
      description: 'Con nuestra asistencia, obtendrás un dominio que refleje la identidad y el propósito de tu negocio.',
    },
    {
      title: 'Correos Electrónicos',
      description: 'Con direcciones de correo electrónico profesionales que utilizan tu dominio, transmites confianza y profesionalismo a tus clientes, mientras mantienes una comunicación efectiva.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <Hero 
            title={"Diseño web"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"Explora una nueva dimensión en el diseño web con Nexus Marketing. Nuestro equipo en Reynosa te ofrece un servicio dedicado para crear y potenciar la presencia en línea de tu marca. Con nuestra experiencia y compromiso, te acompañaremos en el proceso de desarrollo de un sitio web que refleje la esencia y la visión de tu negocio"}
            image={"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/Component%2029.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9Db21wb25lbnQgMjkucG5nIiwiaWF0IjoxNzEzOTk0MjE0LCJleHAiOjE3NDU1MzAyMTR9.BWJUoThoUTJ70Xktz_OHmGG7d6V0btj_e1DII0o9fnw&t=2024-04-24T22%3A29%3A30.239Z"}
      />
      <Title text={"Sitios Web"}/>
    <div className="Princing">
    <PricingPackage
        name="Web Básico"
        description="Perfecto para pequeñas empresas o proyectos personales."
        price="$5,500 MXN"
        features={[
          'Consultoria ChatNexus IA',
          'Hosting Incluido y Dominio / anual',
          'Correos Electrónicos',
          'Web básica (4 secciones / one pager)',
          "SSL",
          "SEO"
        ]}
      />

      <PricingPackage
        name="Web Plus"
        description="Ideal para empresas medianas con necesidades más avanzadas."
        price="$6,999 MXN"
        features={[
          'Consultoria ChatNexus IA',
          'Hosting Incluido y Dominio / anual',
          'Correos Electrónicos',
          'Web Intermedia (6 secciones)',
          "SSL",
          "SEO"
        ]}
      />

      <PricingPackage
        name="Web Deluxe"
        description="Para empresas que necesita un equipo en marketing continuo."
        price="$7,999 MXN"
        features={[
          'Consultoria ChatNexus IA',
          'Hosting Incluido y Dominio / anual',
          'Correos Electrónicos',
          'Web Personalizada',
          "UX/UI",
          "SSL",
          "SEO"
        ]}
      />
    </div>
    <div className="letter">
      <p>Todos nuestros planes incluyen una reactivación anual de dominio y hosting por un costo de $1,500 MXN. Además, ofrecemos un servicio de capacitación para sitios autogestionables. Los dominios incluidos son .com, .net y .org*.</p>
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
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
      description: ' Con un enfoque meticuloso, corregimos errores y optimizamos la calidad para garantizar que tu mensaje se transmita de manera efectiva.',
    },
    {
      title: 'Video',
      description: 'Ya sea para promocionar tu marca, contar una historia o capturar momentos especiales, estamos aquí para ayudarte a crear contenido visual impactante.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>Video</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Potencia tu presencia en línea con nuestro servicio de video. Desde la producción hasta la edición, ofrecemos soluciones completas para dar vida a tu mensaje. ¡Destaca en el mundo digital con contenido audiovisual de calidad!.</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container--icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-video" style={{ backgroundImage: `url("/video.webp")` }}>
        </div>
      </div>
      <Title text={"Video Contenido"}/>
    <div className="Princing">
    <PricingPackage
        name="Video Básico"
        description="Perfecto para pequeñas empresas o proyectos personales."
        price="$700 MXN"
        features={[
          '3 videos de 1 minuto.',
        ]}
      />

      <PricingPackage
        name="Video Plus"
        description="Ideal para empresas medianas con necesidades más avanzadas."
        price="$1,600 MXN"
        features={[
          '6 videos.',
          '5 fotos.',
        ]}
      />

      <PricingPackage
        name="Video Deluxe"
        description="Para empresas que necesita un equipo en marketing continuo."
        price="$3,200 MXN"
        features={[
          '10 videos.',
          "15 reels.",
          '20 fotos.',
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
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
      title: 'Logotipo',
      description: 'Creamos identidades visuales únicas que reflejan la esencia de tu marca.',
    },
    {
      title: 'Identidad de marca',
      description: 'Desarrollamos tu identidad y ADN de marca.',
    },
    {
      title: 'Materiales de Marketing',
      description: 'Guías de aplicación de marca en tazas, camisas y otros materiales.',
    },
    {
      title: 'Presentaciones de Negocios',
      description: 'Rediseñamos Presentaciones empresariales.',
    },
    {
      title: 'Plantillas para redes sociales',
      description: 'Para redes sociales facebook, instagram, tiktok, etc.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>ADN de marca</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Descubre una nueva dimensión en el diseño de marca con Nexus Marketing. Nuestro equipo será tu aliado estratégico en este proceso de creación y fortalecimiento de tu identidad de marca en el mundo digital y más allá.</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container--icon">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container-brand" style={{ backgroundImage: `url("/marker.webp")` }}>
        </div>
      </div>
      <Title text={"Diseño de Marca"}/>
    <div className="Princing">
    <PricingPackage
        name="Diseño de logotipo"
        description="Ideal para proyectos iniciales."
        price="$700 MXN"
        features={[
          'Diseño de logo.',
          '3 conceptos de logos.',
          'Logo en jpeg y png alta calidad.',
          '3 revisiones.',
          'Entrega en 3 días.',
        ]}
      />

      <PricingPackage
        name="Manual de Identidad"
        description="Ideal para solidificar una marca o un rediseño."
        price="$1,700 MXN"
        features={[
          'Diseño de logo.',
          'Paleta de colores.',
          'Tipografías.',
          'Guía y uso de marca.',
          'Entrega en 4-6 días.',
        ]}
      />

      <PricingPackage
        name="Paquete Branding"
        description="Ideal para proyecto completo."
        price="$3,450 MXN"
        features={[
          'Diseño de logo.',
          "Guía y uso de marca.",
          'Paleta de colores.',
          'Tipografías.',
          'Libro de marca pdf.',
          "Logos para redes.",
          'Plantillas para redes sociales.',
          'Entrega en 4-6 días.',
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
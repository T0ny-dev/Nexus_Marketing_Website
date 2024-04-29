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
      description: 'Desarrollamos sitios web modernos y funcionales que cautivan a tus visitantes.',
    },
    {
      title: 'Materiales de Marketing',
      description: 'Producción audiovisual de alta calidad para promocionar tu negocio o proyecto.',
    },
    {
      title: 'Presentaciones de Negocios',
      description: 'Producción audiovisual de alta calidad para promocionar tu negocio o proyecto.',
    },
    {
      title: 'Plantillas para redes sociales',
      description: 'Producción audiovisual de alta calidad para promocionar tu negocio o proyecto.',
    },
    // Agrega más servicios según sea necesario
  ];

  return (
    <div className="plan">
      <div className="hero">
        <div className="left-container">
          <h1>ADN de marca</h1>
          <h2>Agencia Nexus Marketing</h2>
          <p>Descubre una nueva dimensión en el diseño de marca con Nexus Marketing. Nuestro equipo será tu aliado estratégico en este proceso de creación y fortalecimiento de tu identidad de marca en el mundo digital y más allá</p>
          <a href="/contacto">
            <img src="./button_consultoria.svg" alt="" />
          </a>
        </div>
        <div className="logo-container">
          <img src="./logo-agencia.svg" alt="Logo" />
          <hr />
        </div>
        <div className="right-container" style={{ backgroundImage: `url("https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/Component%2017.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9Db21wb25lbnQgMTcucG5nIiwiaWF0IjoxNzEzOTkzMjc0LCJleHAiOjE3NDU1MjkyNzR9._94iULf-LP37RMhULMO_xDbSwVEGO8a5OKvSMjYc5tA&t=2024-04-24T22%3A13%3A50.225Z")` }}>
        </div>
      </div>
      <Title text={"Diseño de Marca"}/>
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
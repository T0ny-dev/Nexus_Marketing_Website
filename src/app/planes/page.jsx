"use client"

import Title from "../components/ui/Title";
import "./page.css"
import PricingPackage from "../components/ui/Pricing";
import Questions from "../components/Questions";
import Video from "../components/ui/Video";

function Planes () {
  return (
    <div className="plan">
      <Title text={"Planes 360° Marketing"}/>
    <div className="Princing">
    <PricingPackage
        name="Start-1"
        description="Perfecto para pequeñas empresas o proyectos personales que necesitan apoyo de un equipo de innovador."
        price="$4,000 MXN/Mes"
        features={[
          'Consultoria ChatNexus IA',
          'Fotografia para productos / personas',
          'Videos Promocionales',
          'Web basica (4 secciones / one pager)',
        ]}
      />

      <PricingPackage
        name="Plus"
        description="Ideal para empresas medianas con necesidades más avanzadas que necesitan mas soporte de un equipo."
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
        description="Para empresas que necesita un equipo en marketing continuo y especializado para sus necesidades."
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
      <p>Todos los planes tienen incluido la renovacion de dominio y host gratis, acceso a academia *</p>
    </div>
    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;
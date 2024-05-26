"use client"

import Title from "../components/ui/Title";
import "./page.css"
import PricingPackage from "../components/ui/Pricing";
import Questions from "../components/Questions";
import Video from "../components/ui/Video";
import WhatsAppIcon from "../components/WhatsAppIcon";

function Planes () {
  return (
    <div className="plan">
      <Title text={"Planes 360° Marketing"}/>
    <div className="Princing">
    <PricingPackage
        name="Start-1"
        description="Perfecto para pequeñas empresas o proyectos personales que necesitan apoyo de un equipo innovador."
        price="$4,000 MXN/Mes"
        features={[
          'Consultoría ChatNexus IA.',
          'Fotografía para productos / personas.',
          'Videos Promocionales.',
          'Web básica (4 secciones / one pager).',
        ]}
      />

      <PricingPackage
        name="Plus"
        description="Necesidades más avanzadas que necesitan más soporte de un equipo."
        price="$6,999 MXN/mes"
        features={[
          'Consultoría ChatNexus IA.',
          'Fotografía para productos / personas.',
          'Videos Promocionales.',
          'Web (6 secciones).',
        ]}
      />

      <PricingPackage
        name="Deluxe"
        description="Equipo de marketing continuo y especializado para sus necesidades"
        price="$7,999 MXN/mes"
        features={[
          'Consultoría ChatNexus IA.',
          "Acceso a ChatNexus IA.",
          'Fotografía para productos / personas.',
          'Videos Promocionales.',
          'Web personalizada.',
          "Manejo de redes sociales."
        ]}
      />
    </div>
    <div className="letter">
      <p>Todos los planes tienen incluido la renovación de Dominio y Hosting gratis, acceso a academia *</p>
    </div>
    <Questions/>
    <Video/>
    <WhatsAppIcon/>
    </div>
  )
}

export default Planes;
"use client"

import Title from "../components/ui/Title";
import MoreServices from "../components/MoreServices";
import Hero from "../components/Hero";
import "./page.css"
import Questions from "../components/Questions";
import Video from "../components/ui/Video";
import Forms from "../components/ui/Form";

function Planes () {


  return (
    <div className="plan">
      <Hero 
            title={"ChatNexus IA"}
            subtitle={"Agencia Nexus Marketing"}
            parraf={"¡Descubre una nueva era en el Marketing Digital! Nos destacamos por nuestra innovadora estrategia respaldada por tecnología de vanguardia. Con nuestro ChatNexus IA impulsado por la Inteligencia Artificial, transformamos la manera en que interactúas con tu audiencia."}
            image={"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/bot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9ib3QucG5nIiwiaWF0IjoxNzE0MDcwNDgxLCJleHAiOjE3NDU2MDY0ODF9.CSRyxXUovWFNEsUX11wgk72x-Gtv9OmnAQRn3zjkysc&t=2024-04-25T19%3A40%3A35.159Z"}
      />
      <Title text={"Formulario de contacto"}/>
    <Forms/>
    <MoreServices/>

    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;
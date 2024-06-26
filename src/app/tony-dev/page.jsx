import "./page.css"
import Video from "../components/ui/Video";

import BusinessCard from "../components/BusinessCard";

function Tony () {
  return (
    <div className="tarjet">
      <BusinessCard
        img={"/logo-nexus.svg"}
        nombre={"Tony Avilés"}
        puesto={"CTO - Director de Tecnologias"}
        especialidad={"Full-Stack Developer, Tecnologías educativas e Ingeniería Industrial"}
        correo={"antonioraweb@gmail.com"}
      />
      <Video/>
    </div>
  )
}

export default Tony;
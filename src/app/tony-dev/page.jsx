import "./page.css"
import Video from "../components/ui/Video";

import BusinessCard from "../components/BusinessCard";

function Tony () {
  return (
    <div className="tarjet">
      <BusinessCard
        img={"/logo-agencia.svg"}
        nombre={"Tony Aviles"}
        puesto={"CTO - Director de Tecnologias"}
        especialidad={"Full-Stack Developer, Tecnologias educativas e Ingenieria Industrial "}
        correo={"antonioraweb@gmail.com"}
      />
      <Video/>
    </div>
  )
}

export default Tony;
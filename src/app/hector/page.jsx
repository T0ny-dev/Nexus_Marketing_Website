import "./page.css"
import Video from "../components/ui/Video";

import BusinessCard from "../components/BusinessCard";

function Tony () {
  return (
    <div className="tarjet">
      <BusinessCard
        img={"/logo-nexus.svg"}
        nombre={"Hecyor del angel"}
        puesto={"CEO - Director"}
        especialidad={"Dirección de negocios e Innovación"}
      />
      <Video/>
    </div>
  )
}

export default Tony;
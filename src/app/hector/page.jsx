import "./page.css"
import Video from "../components/ui/Video";

import BusinessCard from "../components/BusinessCard";

function Tony () {
  return (
    <div className="tarjet">
      <BusinessCard
        img={"/logo-nexus.svg"}
        nombre={"Héctor del Angel"}
        puesto={"CEO - Director"}
        especialidad={"Dirección de negocios e Innovación"}
        tel={"+52 961 718 4871"}
        correo={"hdelangel@hotmail.com"}
      />
      <Video/>
    </div>
  )
}

export default Tony;
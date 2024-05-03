import "./page.css"
import Video from "../components/ui/Video";

import BusinessCard from "../components/BusinessCard";

function Tony () {
  return (
    <div className="tarjet">
      <BusinessCard
        img={"/logo-nexus.svg"}
        nombre={"Yulissa Plata"}
        puesto={"Directora de mercadotecnia"}
        especialidad={"Marketing y relaciones publicas"}
        correo={"yulissa-mariel@hotmail.com"}
      />
      <Video/>
    </div>
  )
}

export default Tony;
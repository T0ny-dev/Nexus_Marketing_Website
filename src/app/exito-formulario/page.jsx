"use client"

import Title from "../components/ui/Title";
import MoreServices from "../components/MoreServices";
import "./page.css"
import Questions from "../components/Questions";
import Video from "../components/ui/Video";

function Planes () {


  return (
    <div className="plan">
      <div className="contenedor">
      <div className="video">
        <video autoPlay loop muted>
          <source src="/mage.mp4" type="video/mp4" />
          Tu navegador no admite la reproducción de video.
        </video>
      </div>
      <div className="boton">
        <a href="/">
        <button>Regresar al inicio</button>
        </a>
      </div>
    </div>
      <Title  id="contact_title" text={"Gracias nos pondremos en contacto pronto"}/>
    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;
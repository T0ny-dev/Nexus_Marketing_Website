"use client"


import MoreServices from "../components/MoreServices";
import "./page.css"
import Questions from "../components/Questions";
import Video from "../components/ui/Video";
import Forms from "../components/ui/Form";

function Planes () {


  return (
    <div className="plan">
      <div className="hero-contacto">
        <div className="hero-content-contacto">
          <h1 className="hero-title-contacto">Transforma tu Negocio</h1>
          <p className="hero-text-contacto">
            En Nexus Marketing, combinamos inteligencia artificial y estrategias de marketing digital para acelerar tu transformación digital en Reynosa, Tamaulipas.
          </p>
        </div>
        <div className="hero-image-container-contacto">
          <img src="/contacto.png" alt="Marketing Image" className="hero-image-contacto" />
        </div>
      </div>
    <Forms/>
    <MoreServices/>

    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;
import ButtonArrowTranparent from "./ui/ButtonArrowTransparent";
import "./SectionDouble.css"

function SectionDouble () {
  return (
    <div className="section__double">
      <div className="section_logo">
        <img src="/logo-agencia.svg" alt="" />
      </div>
      <div className="section__content">
        <h2>Consultoria gratis</h2>
        <p>
        En nuestra agencia de marketing en Ciudad Reynosa, combinamos la potencia de la inteligencia artificial para ofrecerte soluciones innovadoras. Impulsamos el crecimiento de tu negocio con estrategias digitales efectivas y análisis de datos avanzados. ¿Eres un emprendedor nuevo? ¡Estamos aquí para ayudarte! Ofrecemos una consultoría gratuita a través de nuestro chatbot Nexus IA. Confía en nosotros para llevar tu marca al siguiente nivel en el mundo digital.
        </p>
        <ButtonArrowTranparent text={"Presentacion"}/>
      </div>
    </div>
  )
}

export default SectionDouble;
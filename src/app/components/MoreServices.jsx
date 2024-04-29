import "./MoreServices.css"
import ButtonArrow from "./ui/ButtonArrow";
import ButtonArrowTranparent from "./ui/ButtonArrowTransparent";

function MoreServices () {
  return (
    <div className="more">
      <div className="more__solutions">
        <h3>Nuestras soluciones</h3>
        <h2>Descubre cómo podemos ayudar a tu negocio:</h2>
        <p>
        Nos enfocamos en agregar valor a tu empresa. Ofrecemos capacitación online adaptada a las necesidades de tu proyecto. También brindamos cursos autoguiados gratuitos sobre temas como Marketing, Negocios, IA, Diseño ¡y mucho más! Además, ponemos a tu disposición nuestro chatNexus IA para asistirte en tus proyectos.
        </p>
      </div>
      <div className="more__box">
        <div className="box__content">
          <h3>Academia Virtual</h3>
          <p>
          Tu plataforma de aprendizaje en marketing, donde puedes dominar las mejores estrategias y tácticas para impulsar el crecimiento y las ventas en cualquier tipo de negocio.
          </p>
          <a href="/academy" style={{textDecoration:"none"}}>
          <ButtonArrow text={"Academia"}/>
          </a>
        </div>
        <div className="box__content">
          <h3>ChatNexus IA</h3>
          <p>
          Obtén consultoría personalizada con nuestro ChatNexus IA para fortalecer tus propuestas y diseñar estrategias efectivas para tus proyectos.
          </p>
          <a target="_blank" href="https://chat.agencianexusmarketing.com/" style={{textDecoration:"none"}}>
          <ButtonArrowTranparent text={"Chatbot IA"}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MoreServices;
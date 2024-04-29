import FAQ from "./ui/Faq";
import "./Questions.css"
import Title from "./ui/Title";

function Questions () {
  return (
    <div className="questions">
      <Title text={"Preguntas"}/>
      <FAQ question={"¿Cómo puedo solicitar una factura por los servicios recibidos?"} answer={"Puede solicitar una factura de servicios fácilmente. Contamos con el servicio de emisión de facturas, solo necesita solicitarla y obtendrá el servicio junto con su factura."}/>
      <FAQ question={"¿Puedo cancelar mi plan en cualquier momento?"} answer={"Sí, todos nuestros planes son flexibles y pueden cancelarse en cualquier momento. Están diseñados para apoyar a empresas en su etapa inicial, proporcionando roles clave de apoyo como diseñador web, diseñador gráfico, orientador de marketing digital, editor de video y fotografía. Estas posiciones son fundamentales para la estrategia de mercadotecnia y el manejo de redes sociales de su empresa."}/>
      <FAQ question={"¿Cuánto tiempo demora el proceso de entrega?"} answer={"Nuestro tiempo de entrega varía dependiendo de la complejidad de los requerimientos. Por lo general, tardamos entre 4 días hábiles y hasta una semana en completar el proceso."}/>
      <FAQ question={"¿Cómo se protege mi proyecto una vez completado?"} answer={"Entendemos la importancia de la propiedad intelectual. Por eso, garantizamos que su marca, sitio web y otros activos son propiedad exclusiva del solicitante, respaldado por nuestro acuerdo de protección de propiedad."}/>
      <FAQ question={"¿El servicio de la academia es gratuito?"} answer={"Sí, nuestro servicio de academia es completamente gratuito. Como emprendedores, compartimos conocimiento para ayudarte a comenzar. Por lo general, ofrecemos cursos autoguiados con un certificado emitido por nosotros, que puede respaldar tus habilidades. Sin embargo, algunos cursos específicos, que consideramos de pago, pueden ofrecerse en modalidad híbrida u online."}/>
      <FAQ question={"¿Cómo puedo acceder al ChatNexus IA?"} answer={"Actualmente, estamos en la etapa beta del ChatNexus IA y estamos perfeccionando los detalles. Por lo general, ofrecemos acceso a través de nuestras consultorías. Puedes obtenerlo mediante una consultoría rápida o como parte del plan deluxe."}/>
    </div>
  )
}

export default Questions;
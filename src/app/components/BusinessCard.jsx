import "./BusinessCard.css"

function BusinessCard ({img, nombre, puesto, especialidad, correo, tel}) {
  return (
    <div className="businesscard">
      <img src={img} alt="avatar" />
      <h2>{nombre}</h2>
      <p className="title_work">{puesto}</p>
      <p>Agencia Nexus Marketing - ChatNexus IA</p>
      <p style={{maxWidth:"350px", textAlign:"center"}}> <span style={{fontWeight:"bold"}}>Especialidad:</span> {especialidad}</p>
      <p><span style={{fontWeight:"bold"}}>contacto:</span> {correo}</p>
      <p><span style={{fontWeight:"bold"}}>teléfono:</span> {tel}</p>
    </div>
  )
}

export default BusinessCard;
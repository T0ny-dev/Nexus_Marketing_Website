import './Hero.css'; // Archivo de estilos


const Hero = ({ title, subtitle, parraf, link, image }) => { // Corrige la destructuración de props
  return (
    <div className="hero">
      <div className="left-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{parraf}</p>
        <a href={link}>
          <img src="./button_consultoria.svg" alt="" />
        </a>
      </div>
      <div className="logo-container">
        <img src="./logo-agencia.svg" alt="Logo" />
        <hr />
      </div>
      <div className="right-container" style={{ backgroundImage: `url("${image}")` }}>
      </div>
    </div>
  );
};

export default Hero;


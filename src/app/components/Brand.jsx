import "./Brand.css"

function Brand () {
  return (
    <div className="Brand">
      <div className="Brand__title">
        <h3>Diversas Tecnologías</h3>
      </div>
      <div className="Brand__logos">
        <img src="./chatgpt.png" alt="logo chatgpt reynosa" />
        <img src="./wordpress.png" alt="logo wordpress" />
        <img src="./next-l.svg" alt="logo next" />
        <img src="./figma.png" alt="logo figma" />
        <img src="./astro.png" alt="logo astoja" />
      </div>
    </div>
  )
}

export default Brand;
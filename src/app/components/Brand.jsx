import "./Brand.css"

function Brand () {
  return (
    <div className="Brand">
      <div className="Brand__title">
        <h3>Diversas Tecnologías</h3>
      </div>
      <div className="Brand__logos">
        <img src="./chatgpt.png" alt="" />
        <img src="./wordpress.png" alt="" />
        <img src="./next-l.svg" alt="" />
        <img src="./figma.png" alt="" />
        <img src="./astro.png" alt="" />
      </div>
    </div>
  )
}

export default Brand;
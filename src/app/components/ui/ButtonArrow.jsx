import "./ButtonArrow.css"

function ButtonArrow ({text}) {
  return(
    <button className="button_arrow">
      {text} <img src="/arrow.png" alt="flecha" />
    </button>
  )
}

export default ButtonArrow;
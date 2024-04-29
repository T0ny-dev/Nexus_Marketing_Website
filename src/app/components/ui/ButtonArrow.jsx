import "./ButtonArrow.css"

function ButtonArrow ({text}) {
  return(
    <button className="button_arrow">
      {text} <img src="/arrow.png" alt="" />
    </button>
  )
}

export default ButtonArrow;
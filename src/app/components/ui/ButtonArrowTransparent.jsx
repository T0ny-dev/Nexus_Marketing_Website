import "./ButtonArrow.css"
import "./ButtonArrowTransparent.css"

function ButtonArrowTranparent ({text}) {
  return(
    <button className="button_arrow--transparent">
      {text} <img src="/arrow.png" alt="" />
    </button>
  )
}

export default ButtonArrowTranparent ;
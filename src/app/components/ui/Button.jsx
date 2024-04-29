//use
import "./Button.css"

function Button ({text}) {
  return (
    <button className="button__primary" style={{textDecoration:"none"}}>{text}</button>
  )
}

export default Button;
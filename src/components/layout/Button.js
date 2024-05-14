
import style from './Button.module.css'

function Button(props) {
  return (
    <button className={style.botao} onClick={props.onClick}> {props.children} {props.text} </button>
  )
}

export default Button

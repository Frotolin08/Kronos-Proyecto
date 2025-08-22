import { Link } from "react-router"

export default function SimpleButton(props) {

return(

<Link to={props.link}><button onClick={props.onClick} disabled={props.disabled} className={props.class}
>{props.text}</button></Link>



)

}
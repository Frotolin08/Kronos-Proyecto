import { Link } from "react-router"
import '../styles.css'
export default function RouteSelector(props) {
const routes = props.routes
return(
<div className="RouteSelectorBox">
    <h1>Seleccionar ruta</h1>
    <ul>
   {routes.map((route) => (<li key={route}><Link to={route}><p>{route}</p></Link></li>))}
   </ul>
</div>

)

}
import { Link } from "react-router"

export default function LogoWText(props) {

return(
    <>
    <Link to={props.titleLink}>
    <img onClick={props.logoOnClick}src='../../public/logo.svg'/>
    </Link>
    <Link to={props.titleLink}>
        Kronos
    </Link>
    </>
)

}
import {Link} from 'react-router'
import '../styles.css'
export default function Navbar(props) {

return(

<div className={props.class? props.class :'NavBar'}>
    <div className="NavBarLeftDiv">
    <Link to={props.titleLink}>
    <img onClick={props.logoOnClick}src={props.logo}/>
    </Link>
    <Link to={props.titleLink}>
        {props.titleText}
    </Link>
    </div>
    <div className="NavBarRightDiv">
<Link to={props.button1Link}>
    <button className='NavButton1'>{props.button1Text}</button>
    </Link>
    <Link to={props.button2Link}>
    <button className='NavButton2'>{props.button2Text}</button>
    </Link>
    </div>
</div>

)

}
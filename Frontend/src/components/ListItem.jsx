import {Link} from 'react-router'

export default function ListItem(props) {

return(
    <Link to={props.Link}>
<div className="ListItem"> <p>{props.title}</p>
<p>{props.subtitle}</p>
<button onClick={props.buttonOnClick}>{props.buttonContent}</button>
</div></Link>


)

}

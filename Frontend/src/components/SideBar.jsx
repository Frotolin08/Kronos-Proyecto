import SimpleButton from '../components/SimpleButton.jsx'
import Separator from './Separator.jsx'
import {Link} from 'react-router'
import FancyTitle from './FancyTitle.jsx'
export default function SideBar(props) {
    
const projects = props.projects? props.projects.map((item)=> {
<Link to={item.link}><div className='project'><div style={{backgroundColor: item.color}}/><p>{item.title}</p></div></Link>
}) : 'Nothing to see here...'

return(
<div className='sideBar'>
<ul className='tabs'>
    <div id='addBtn'><span className='material-symbols-outlined'>add_circle</span>Crear</div>
    <div id='inicioBtn'><span className='material-symbols-outlined'>home</span>Inicio</div>
    <div id='tareasBtn'><span className='material-symbols-outlined'>list_alt_add</span>Mis tareas</div>
    <div id='notifBtn'><span className='material-symbols-outlined'>notifications</span>Notificaciones</div>
</ul>
<Separator/>
<FancyTitle class='proyectosTitle' text='Proyectos'/>
<ul className='proyectos'>
    {projects}
</ul>
<ul className='equipos'></ul>
<SimpleButton class='invitarBtn' icon='mail' text='Invitar'/>
</div>

)


}
import FancyTitle from "./FancyTitle";
import Separator from "./Separator";
import SimpleButton from "./SimpleButton";
import { useState } from "react";
export default function ProjectPageContent(props) {

const [selected, setSelected] = useState(1) 

return (
<div className='topMenuPgContent' style={props.SbOpen?{marginLeft: '0px', width: '100%'} : {}}>
    <div id='topMenuContentTitle'>
<FancyTitle class='proyectosTitle' text={props.projName? props.projName : 'Nombre del proyecto'}/>
<SimpleButton class='compartirBtn' icon='lock' text='Compartir'/>
</div>
<div id='topMenuPgContentList'>
    <p onClick={() => setSelected(1)} style={selected==1? {backgroundColor: '#A2A2A2'} : {}}>Calendario</p>
    <p onClick={() => setSelected(2)} style={selected==2? {backgroundColor: '#A2A2A2'} : {}}>Lista de Tareas</p>
    <p onClick={() => setSelected(3)} style={selected==3? {backgroundColor: '#A2A2A2'} : {}}>Tablero Kanban</p>
    <p onClick={() => setSelected(4)} style={selected==4? {backgroundColor: '#A2A2A2'} : {}}>Mensajes</p>
</div>
<Separator style={{width: '100%', position:'absolute', left: '0px', opacity: '30%'}}/>
</div>

)

}
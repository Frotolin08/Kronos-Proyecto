import FancyTitle from "../components/FancyTitle";
import SplitForm from "../components/SplitForm";
import NavBar from '../components/NavBar'
export default function Login() {
const fields= [{name: 'username',
requireMsg: 'inserte username',
placeholder: 'nombre@empresa.com'},
{name: 'password',
placeholder: 'Contraseña',
requireMsg: 'inserte contraseña',
isPassword: true,},
]
return(
    <>
    <NavBar class='emptyNav'logo='../../public/logo.svg' titleLink='/' titleText="Kronos"/>
<div className='loginPage'>
    <FancyTitle class='loginTitle'text='Regístrate en KRONOS' subTitle='Da comienzo a esta experiencia'/>
<SplitForm fields={fields} class='register' submitBtn='Registrarse'/>
</div>
</>)
}
import FancyTitle from "../components/FancyTitle";
import SplitForm from "../components/SplitForm";
import NavBar from '../components/NavBar'
export default function Login() {
const fields= [{name: 'username',
requireMsg: 'inserte username',
label: 'Dirección de email'},
{name: 'password',
requireMsg: 'inserte contraseña',
isPassword: true,
label:'Contraseña',
underText: '¿Te olvidaste tu contraseña?',
underTextLink: '/recover'},
]
return(
    <>
    <NavBar class='emptyNav'logo='../../public/logo.svg' titleLink='/' titleText="Kronos"/>
<div className='loginPage'>
    <FancyTitle class='loginTitle'text='Bienvenido a KRONOS' subTitle='Para comenzar, iniciar sesion'/>
    
<SplitForm fields={fields} class='login' submitBtn='Inicia Sesion'/>
</div>
</>)
}
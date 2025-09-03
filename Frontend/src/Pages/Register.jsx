import FancyTitle from "../components/FancyTitle";
import RegisterForm from "../components/RegisterForm";
import NavBar from '../components/NavBar'
export default function Register() {

return(
    <>
    <NavBar class='emptyNav'logo='../../public/logo.svg' titleLink='/' titleText="Kronos"/>
<div className='loginPage'>
    <FancyTitle class='loginTitle'text='Regístrate en KRONOS' subTitle='Da comienzo a esta experiencia'/>
<RegisterForm class='register' />
</div>
</>)
}
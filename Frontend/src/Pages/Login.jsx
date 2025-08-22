import SplitForm from "../components/SplitForm";

export default function Login() {
const fields= [{name: 'username',
placeholder: 'dirección de email',
requireMsg: 'inserte username'},
{name: 'password',
placeholder: 'contraseña',
requireMsg: 'inserte contraseña',
isPassword: true,},
]
return(<SplitForm fields={fields} class='login'/>)

}
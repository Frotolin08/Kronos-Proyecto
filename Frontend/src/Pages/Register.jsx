import { useState } from "react"
import Form from "../components/Form";
import PageDisabledModal from "../components/PageDisabledModal";
import { register } from "../../api/auth";
export default function Register() {
const fields =[{
    name: "username",
    placeholder: "create a username",
    requireMsg: "Please insert a username",
},{
name: "password",
    placeholder: "create a password",
    requireMsg: "Please insert a password",
    isPassword: true,
},
{
    name: 'repeat password',
    placeholder: 'please repeat your password',
    requireMsg: 'please insert the same password',
    isPassword: true,
    validateWithPassword: true
}
]

const [triggered, setTriggered] = useState(false);
  const disable = () => setTriggered(false);
    return (<><p>Please fill out the register form</p>
    <Form onSubmit={register}fields={fields} setTriggered={setTriggered}
        triggered={triggered}
        openModal={true}/>
         <PageDisabledModal
                triggered={triggered}
                disable={disable}
                innerText="Form submitted succesfully"
              />
</>
)
}
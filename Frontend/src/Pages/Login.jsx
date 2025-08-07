import {useForm} from 'react-hook-form'


export default function Login() {
const {register, handleSubmit} = useForm()
const onSubmit = async (data) => { console.log(data) }
return( 
<>
<p>Login Page</p>
    <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("Username")} placeholder='insert a username'/>
<input {...register("password")} placeholder='insert a password'/>
<input type='submit'/>
    </form>
    </>
    )

}
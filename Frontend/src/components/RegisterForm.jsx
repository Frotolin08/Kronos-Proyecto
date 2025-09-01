import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, UNSAFE_NavigationContext } from "react-router";
import { useNavigate } from "react-router";
export default function RegisterForm(props) {

  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
      } = useForm();

      const [step, setStep] = useState(1);

      const onSubmit = async (data) => {
        if(step==1)
        {setStep(2); }
        else {
      console.log(data);
      props.onSubmit && await props.onSubmit(data.email, data.pfp, data.nombre, data.password)
      reset(); navigate('/')}} 

      
      const [passwordVisibility, setPasswordVisibility] = useState(false)
return(

<>
<form onSubmit={handleSubmit(onSubmit)} className={props.class}>
        
       {step==1 &&  ( <div className='inputBox'>
        <input id='firstInputRegister' 
         {...register('email', {required:'inserte un email'})}
        placeholder='nombre@empresa.com'/> 
</div>)}


{step==2 &&  ( <div className='input2Box'>
  <div className='biggerRegisterContainer'>
        <input type='file' accept='image/*'
        {...register('pfp', {required: 'inserte una imagen'})}/>
        <div className='smallerRegisterContainer'>
        <label>Tu nombre completo</label>
        <input 
         {...register('nombre', {required: 'Inserte un nombre'})}
      /> 
      <label>Contraseña</label>
        <input type={passwordVisibility ? null : 'password'} 
         {...register('password', {required: 'Inserte una constraseña'})}
      /> 
      <span style={{cursor: 'pointer'}}className="material-symbols-outlined" onClick={ () => setPasswordVisibility(!passwordVisibility)}>
{passwordVisibility? 'visibility' : 'visibility_off'}
</span> 
</div>
</div>
<Link to='/login'>Inicia sesión acá</Link>
      
</div>)}
        
       

      <button type='submit'style={step==1 ?{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'} : null}> {step==1 ? 'Continuar' : 'Registrate'}</button>
      
     
      </form>
      {errors['email'] && (
               <p className="formError">{errors['email'].message}</p>
             )}
             {errors['nombre'] && (
               <p className="formError">{errors['nombre'].message}</p>
             )}
             {errors['password'] && (
               <p className="formError">{errors['password'].message}</p>
             )}
     
    </>


)

        }

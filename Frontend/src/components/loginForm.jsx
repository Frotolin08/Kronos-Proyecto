import {useForm} from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
export default function(props) {
    const formFields = props.fields;
    const navigate = useNavigate()
    const [step, setStep] = useState(0)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
      } = useForm();
      const onSubmit = async (data) => {
          if(step<formFields.length -1)
          {setStep(step+1); setValue(formFields[step+1].name, '') }
          else {
        console.log(data);
        props.onSubmit && await props.onSubmit(data.username, data.password)
        reset(); navigate('/')
    }
    }
        const currentField = formFields[step]
        const [passwordVisibility, setPasswordVisibility] = useState(false)
        
return(
<>
<form onSubmit={handleSubmit(onSubmit)} className={props.class}>
        <label style={errors[currentField.name] && {color: "#B20000"}}>{currentField.label}</label>
        <div className='inputBox'>
        <input className={errors[currentField.name] && "errorInput"}
        type={currentField.isPassword && !passwordVisibility && 'password'} {...register(currentField.name, {required: currentField.requireMsg})}
        placeholder={currentField.placeholder}/>
        
         {currentField.isPassword && <span style={{cursor: 'pointer'}}className="material-symbols-outlined" onClick={ () => setPasswordVisibility(!passwordVisibility)}>
{passwordVisibility? 'visibility' : 'visibility_off'}
</span> }
</div>

        <Link to={currentField.underTextLink}>{currentField.underText}</Link>
       

      <button type='submit'> {step < formFields.length - 1 ? 'Continuar' : props.submitBtn}</button>
      
     
      </form>
      {errors[currentField.name] && (
               <p className="formError">{errors[currentField.name].message}<Link style={{color: "#4240BE", textDecoration: "underline", }} to="/register">  Registrarse</Link></p>
             )}
     
    </>

)


}
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router";
export default function RegisterForm(props) {

    const formFields = props.fields;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
      } = useForm();

      const [step, setStep] = useState(0);

      const onSubmit = async (data) => {
        if(step<formFields.length -1)
        {setStep(step+1); setValue(formFields[step+1].name, '') }
        else {
      console.log(data);
      props.onSubmit && await props.onSubmit(data.username, data.password)
      reset(); }} 

      const currentField = formFields[step]
      const [passwordVisibility, setPasswordVisibility] = useState(false)
return(

<>
<form onSubmit={handleSubmit(onSubmit)} className={props.class}>
        <label>{currentField.label}</label>
        <div className='inputBox'>
        <input 
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
               <p className="formError">{errors[currentField.name].message}</p>
             )}
     
    </>


)

        }


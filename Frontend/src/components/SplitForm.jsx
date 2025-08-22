import {useForm} from 'react-hook-form'
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
        
return(

<form onSubmit={handleSubmit(onSubmit)} className={props.class}>
        <input 
        type={currentField.isPassword && "password"} {...register(currentField.name, {required: currentField.requireMsg})}
        placeholder={currentField.placeholder}
        />

      <button type='submit'> {step < formFields.length - 1 ? 'Next' : 'Submit'}</button>
      </form>
    

)


}
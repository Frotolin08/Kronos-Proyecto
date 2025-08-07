import Register from "../Pages/Register";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const formFields = props.fields; //debe ser un array de objetos de la estructura {name: string, placeholder: string}
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    props.openModal && props.setTriggered(!props.triggered);
  };

  return (
    <>
      <p>Login Page</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <div key={field.name}>
            <input
              type={field.isPassword && "password"}
              {...register(field.name, { required: field.requireMsg })}
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <p className="formError">{errors[field.name].message}</p>
            )}
          </div>
        ))}
        <input type="submit" />
      </form>
    </>
  );
}

//<input {...register("Username")} placeholder="insert a username" />
//<input {...register("password")} placeholder="insert a password" />

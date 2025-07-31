import {useForm} from 'react-hook-form';
const FormReact = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

  const onSubmit = (data) => {
    alert("Registration successful : "+JSON.stringify(data,null,2));
  };

return (
    <div style={{maxWidth:'500px'}}>
            <h2>Registration Form : </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{marginBottom:'15px'}}>
                            <label>Name :</label>
                            <input
                                    type='text'
                                    {...register("name",{required: "Name is required"})}
                            />
                            {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
                    </div>

                    <div style={{marginBottom:'15px'}}>
                            <label>Email :</label>
                            <input
                                    type='text'
                                    {...register("email",{required: "Email is required",
                                            pattern:{
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Invalid email format"
                                            }
                                    })}
                            />
                            {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
                    </div>

                    <div style={{marginBottom:'15px'}}>
                            <label>Password :</label>
                            <input
                                    type='password'
                                    {...register("password",{required: "Password is required",
                                            minLength: {
                                                    value: 10,
                                                    message: "Password must be at least 10 characters"
                                            }
                                    })}
                            />
                            {errors.password && <p style={{color:'red'}}>{errors.password.message}</p>}
                    </div>

                    <div style={{marginBottom:'15px'}}>
                            <label>Confirm Password :</label>
                            <input
                                    type='password'
                                    {...register("confirmPassword",{
                                            required: "Confirm Password is required",
                                            validate: (value, formValues) =>
                                                    value === formValues.password || "Password must match"
                                    })}
                            />
                            {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword.message}</p>}
                    </div>
                    <button type='submit'>Register</button>
            </form>
    </div>
)
}
export default FormReact;
import {useState} from 'react';
function FourthForm(){
    const[formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const[errors, setErrors] = useState({});
    const handleChange=(event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const validate=()=>{
        let errorList={};
        if(!formData.email.trim()){
            errorList.email = "Email is required..";
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)){
            errorList.email = "Email is invalid..";
        }
        if(!formData.password.trim()){
            errorList.password = "Password is required..";
        }
        else if(formData.password.length < 3){
            errorList.password = "Password length should be greater than 3..";
        }
        if(formData.password !== formData.confirmPassword){
            errorList.confirmPassword = "Incorrect Password !";
        }
        return errorList;
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const validateErrors = validate();
        setErrors(validateErrors); 
        if(Object.keys(validateErrors).length === 0){
            alert(`Form Submitted`);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>
                <br></br>
                <div>
                    <input name="password" type="text" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div>
                <br></br>
                <div>
                    <input name="confirmPassword" type="text" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}
                </div>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FourthForm;

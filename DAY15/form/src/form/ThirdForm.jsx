import {useState} from 'react';
function ThirdForm(){
    const[formData, setFormData] = useState({
        name: '',
        email: ''
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
        if(!formData.name.trim()){
            errorList.name="Name is required..";
        }
        if(!formData.email.trim()){
            errorList.name="Email is required..";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)){
            errorList.name="Email is invalid..";
        }
        return errorList;
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const validateErrors = validate();
        setErrors(validateErrors); 
        if(Object.keys(validateErrors).length === 0){
            alert(`Name : ${formData.name}, Email : ${formData.email}`);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name="name" type="text" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>
                <br></br>
                <div>
                    <input name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    {errors.name && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ThirdForm;
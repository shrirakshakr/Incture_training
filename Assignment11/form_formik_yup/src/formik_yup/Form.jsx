import {useFormik} from 'formik';
import * as Yup from 'yup';
const Form= () =>{
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        gender: Yup.string()
            .oneOf(['Male', 'Female'], 'Gender is required')
            .required('Gender is required'),
        city: Yup.string()
            .required('City is required'),
        terms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions')
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            city: '',
            terms: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful" + JSON.stringify(values, null, 2));
        }
    });
    return(
        <div style={{maxWidth: '500px', margin: 'auto', padding:'20px'}}>
            <h2>Register :</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Name : </label>
                    <input
                        type='text'
                        name='name'
                        value={formik.values.name}
                        placeholder='Enter Name'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name &&(
                        <div style={{color: 'red'}}>{formik.errors.name}</div>
                    )}
                </div>

                {/* Email input */}
                <div style={{marginBottom: '10px'}}>
                    <label>Email : </label>
                    <input
                        type='email'
                        name='email'
                        value={formik.values.email}
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email &&(
                        <div style={{color: 'red'}}>{formik.errors.email}</div>
                    )}
                </div>

                {/* Password input */}
                <div style={{marginBottom: '10px'}}>
                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        placeholder='Enter Password'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password &&(
                        <div style={{color: 'red'}}>{formik.errors.password}</div>
                    )}
                </div>

                {/* Confirm Password input */}
                <div style={{marginBottom: '10px'}}>
                    <label>Confirm Password : </label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={formik.values.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={formik.handleChange}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword &&(
                        <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>
                    )}
                </div>

                {/* Gender input */}
                <div style={{marginBottom: '10px'}}>
                <label>Gender : </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formik.values.gender === "Male"}
                        onChange={formik.handleChange}
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formik.values.gender === "Female"}
                        onChange={formik.handleChange}
                    /> Female
                </label>
                {formik.touched.gender && formik.errors.gender && (
                    <div style={{color: 'red'}}>{formik.errors.gender}</div>
                )}
                </div>

                {/* City input */}
                <div style={{marginBottom: '10px'}}>
                    <label>City : </label>
                    <select
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select City</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    {formik.touched.city && formik.errors.city && (
                        <div style={{color: 'red'}}>{formik.errors.city}</div>
                    )}
                </div>

                {/* Terms and condition */}
                <div style={{marginBottom: '10px'}}>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                    />
                    Terms and Condition
                </label>
                {formik.touched.terms && formik.errors.terms && (
                    <div style={{color: 'red'}}>{formik.errors.terms}</div>
                )}
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form;


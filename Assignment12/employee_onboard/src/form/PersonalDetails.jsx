import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () =>{
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        name:Yup.string()
        .required('Name is required')
        .min(3, 'Name must be atleast 3 characters'),
        email:Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        // password:Yup.string()
        // .min(6, 'Password must be at least 6 characters')
        // .required('Password is required'),
        phone:Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number 10 digits only')
        .required('Phone number is required'),
        dob:Yup.date()
        .required('Age should be greater than 18')
        .test('age', 'Age should be greater than 18', function(value) {
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                return age > 18;
            }
            return age >= 18;
        }),
        photo:Yup.mixed()
        .required('Photo is required')
    });
    const formik=useFormik({
        initialValues: {
            name: '',
            email: '',
            // password: '',
            phone:'',
            dob:'',
            photo:null
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful"+JSON.stringify(values, null, 2));
        }
    });
    return(
        <div style={{maxWidth: '500px', margin: 'auto', padding:'20px'}}>
            <h2>Personal details :</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Full Name : </label>
                    <input
                        type='text'
                        name='name'
                        value={formik.values.name}
                        placeholder='Enter Name'
                        onChange={formik.handleChange} />
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
                        onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email &&(
                        <div style={{color: 'red'}}>{formik.errors.email}</div>
                    )}
                </div>

                {/* Password input */}
                {/* <div style={{marginBottom: '10px'}}>
                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        placeholder='Enter Password'
                        onChange={formik.handleChange} />
                    {formik.touched.password && formik.errors.password &&(
                        <div style={{color: 'red'}}>{formik.errors.password}</div>
                    )}
                </div> */}

                <div style={{marginBottom: '10px'}}>
                    <label>Phone Number : </label>
                    <input
                        type='number'
                        name='phone'
                        value={formik.values.phone}
                        placeholder='Enter Phone Number'
                        onChange={formik.handleChange} />
                    {formik.touched.phone && formik.errors.phone &&(
                        <div style={{color: 'red'}}>{formik.errors.phone}</div>
                    )}
                </div>

                <div style={{marginBottom: '10px'}}>
                    <label>Date of Birth : </label>
                    <input
                        type='date'
                        name='dob'
                        value={formik.values.dob}
                        placeholder='Enter Date of Birth'
                        onChange={formik.handleChange} />
                    {formik.touched.dob && formik.errors.dob &&(
                        <div style={{color: 'red'}}>{formik.errors.dob}</div>
                    )}
                </div>

                <div style={{marginBottom: '10px'}}>
                    <label>Upload photo : </label>
                    <input
                        type='file'
                        name='photo'
                        value={formik.values.photo}
                        placeholder='Upload your photo'
                        onChange={formik.handleChange} />
                    {formik.touched.photo && formik.errors.photo &&(
                        <div style={{color: 'red'}}>{formik.errors.photo}</div>
                    )}
                </div>
                <br></br>
                <button
          type="button"
          onClick={() => {
            // optionally validate before navigating
            formik.validateForm().then(errors => {
              if (Object.keys(errors).length === 0) {
                navigate('/job-details');
              } else {
                formik.setTouched({
                  name: true,
                  email: true,
                  phone: true,
                  dob: true,
                  photo: true,
                });
              }
            });
          }}
        >
          Next
        </button>
            </form>
        </div>
    )
}
export default PersonalDetails; 
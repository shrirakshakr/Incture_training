import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const JobDetails = () =>{
const navigate = useNavigate();

     const today = new Date().toISOString().split("T")[0];


    const validationSchema = Yup.object({
        

        employeeId: Yup.string()
            .matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed')
            .required('Employee ID is required'),
        department: Yup.string()
            .required('Department is required'),
        role: Yup.string()
            .required('Role/Designation is required'),
        joiningDate: Yup.date()
            .min(today, 'Joining date cannot be in the past')
            .required('Joining date is required'),
        workLocation: Yup.string()
            .required('Work location is required')
    });
    const formik=useFormik({
        initialValues: {
            
             employeeId: '',
            department: '',
            role: '',
            joiningDate: '',
            workLocation: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful"+JSON.stringify(values, null, 2));
        }
    });
    return(
        <div style={{maxWidth: '500px', margin: 'auto', padding:'20px'}}>

                    <h2>Job details :</h2>
                <form onSubmit={formik.handleSubmit}>
                {/* Employee ID */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Employee ID: </label>
                    <input
                        type='text'
                        name='employeeId'
                        value={formik.values.employeeId}
                        placeholder='Enter Employee ID'
                        onChange={formik.handleChange}
                        
                    />
                    {formik.touched.employeeId && formik.errors.employeeId && (
                        <div style={{ color: 'red' }}>{formik.errors.employeeId}</div>
                    )}
                </div>

                {/* Department */}
                

                <div style={{marginBottom: '10px'}}>
                    <label>Department : </label>
                    <select
                        name="department"
                        value={formik.values.department}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select Department</option>
                        <option value="Engineering">Engineering</option>
                        <option value="HR">HR</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </select>
                    {formik.touched.department && formik.errors.department && (
                        <div style={{color: 'red'}}>{formik.errors.department}</div>
                    )}
                </div>

                {/* Role/Designation */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Role/Designation: </label>
                    <input
                        type='text'
                        name='role'
                        value={formik.values.role}
                        placeholder='Enter Role'
                        onChange={formik.handleChange}
                       
                    />
                    {formik.touched.role && formik.errors.role && (
                        <div style={{ color: 'red' }}>{formik.errors.role}</div>
                    )}
                </div>

                {/* Joining Date */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Joining Date: </label>
                    <input
                        type='date'
                        name='joiningDate'
                        value={formik.values.joiningDate}
                        onChange={formik.handleChange}
                        
                        min={today}
                    />
                    {formik.touched.joiningDate && formik.errors.joiningDate && (
                        <div style={{ color: 'red' }}>{formik.errors.joiningDate}</div>
                    )}
                </div>

                {/* Work Location */}

                <div style={{marginBottom: '10px'}}>
                    <label>Work Location : </label>
                    <select
                        name="workLocation"
                        value={formik.values.workLocation}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select Location</option>
                        <option value="Mangalore">Mangalore</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                    {formik.touched.workLocation && formik.errors.workLocation && (
                        <div style={{color: 'red'}}>{formik.errors.workLocation}</div>
                    )}
                </div>
                <br></br>
                <button type="button" onClick={() => navigate('/')}>
          Back
        </button>

        <button
          type="button"
          onClick={() => {
            // optionally validate before navigating
            formik.validateForm().then(errors => {
              if (Object.keys(errors).length === 0) {
                navigate('/bank-details');
              } else {
                formik.setTouched({
                  employeeId: true,
                  department: true,
                    role: true,
                    joiningDate: true,
                    workLocation: true
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
export default JobDetails;


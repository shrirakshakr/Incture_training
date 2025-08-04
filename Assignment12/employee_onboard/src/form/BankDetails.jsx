import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const BankDetails = () =>{
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        ban:Yup.string()
        .min(9, "Min 9 characters")
        .max(18, "Max 18 characters")
        .required('Bank Account Number is required'),
        ifsc:Yup.string()
        .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC code')
        .required('IFSC code is required'),
        pan:Yup.string()
        .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, 'Invalid PAN number')
        .required('PAN number is required'),
        upi:Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid UPI ID')
    });
    const formik=useFormik({
        initialValues: {
            ban: '',
            ifsc: '',
            pan:'',
            upi:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful"+JSON.stringify(values, null, 2));
        }
    });
    return(
        <div style={{maxWidth: '500px', margin: 'auto', padding:'20px'}}>
            <h2>Bank details :</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Bank Account Number : </label>
                    <input
                        type='text'
                        name='ban'
                        value={formik.values.ban}
                        placeholder='Enter Account Number'
                        onChange={formik.handleChange} />
                    {formik.touched.ban && formik.errors.ban &&(
                        <div style={{color: 'red'}}>{formik.errors.ban}</div>
                    )}
                </div>

                {/* Email input */}
                <div style={{marginBottom: '10px'}}>
                    <label>IFSC code : </label>
                    <input
                        type='text'
                        name='ifsc'
                        value={formik.values.ifsc}
                        placeholder='Enter IFSC code'
                        onChange={formik.handleChange} />
                    {formik.touched.ifsc && formik.errors.ifsc &&(
                        <div style={{color: 'red'}}>{formik.errors.ifsc}</div>
                    )}
                </div>


                <div style={{marginBottom: '10px'}}>
                    <label>PAN Number : </label>
                    <input
                        type='text'
                        name='pan'
                        value={formik.values.pan}
                        placeholder='Enter PAN Number'
                        onChange={formik.handleChange} />
                    {formik.touched.pan && formik.errors.pan &&(
                        <div style={{color: 'red'}}>{formik.errors.pan}</div>
                    )}
                </div>

                <div style={{marginBottom: '10px'}}>
                    <label>UPI : </label>
                    <input
                        type='text'
                        name='upi'
                        value={formik.values.upi}
                        placeholder='Enter UPI Id'
                        onChange={formik.handleChange} />
                    {formik.touched.upi && formik.errors.upi &&(
                        <div style={{color: 'red'}}>{formik.errors.upi}</div>
                    )}
                </div>
                <br></br>
                <button type="button" onClick={() => navigate('/job-details')}>
          Back
        </button>
                <button
          type="button"
          onClick={() => {
            // optionally validate before navigating
            formik.validateForm().then(errors => {
              if (Object.keys(errors).length === 0) {
                navigate('/emergency-contacts');
              } else {
                formik.setTouched({
                  ban:true,
                  ifsc:true,
                  pan:true,
                  upi:true
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
export default BankDetails; 
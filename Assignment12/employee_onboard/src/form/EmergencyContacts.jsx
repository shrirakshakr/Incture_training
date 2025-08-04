import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const EmergencyContacts = () =>{
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        contacts:Yup.array()
        .of(Yup.ObjectSchema({
        name:Yup.string()
                .required('Name is required')
                .min(3, 'Name must be atleast 3 characters'),
        phone:Yup.string()
                .matches(/^[0-9]{10}$/, 'Phone number 10 digits only')
                .required('Phone number is required'),
        relation:Yup.string()
        .required("Relation is required")
        })
        )
        .min(1, "Atleast 1 Emergency Contact is required")
    });
    const formik=useFormik({
        initialValues: {
            contacts :[{
            name: '',
            phone: '',
            relation:''
            },
        ],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Registration Successful"+JSON.stringify(values, null, 2));
        }
    });
    return(
        <div style={{maxWidth: '500px', margin: 'auto', padding:'20px'}}>
            <h2>Emergency Contacts :</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom: '10px'}}>
                    <label>Full Name : </label>
                    <input
                        type='text'
                        name='name'
                        value={formik.values.contacts[index].name}
                        placeholder='Enter Name'
                        onChange={formik.handleChange} />
                    {formik.touched.contacts[index].name && formik.errors.contacts[index].name &&(
                        <div style={{color: 'red'}}>{formik.errors.contacts[index].name}</div>
                    )}
                </div>

                <div style={{marginBottom: '10px'}}>
                    <label>Phone Number : </label>
                    <input
                        type='number'
                        name='phone'
                        value={formik.values.contacts[index].phone}
                        placeholder='Enter Phone Number'
                        onChange={formik.handleChange} />
                    {formik.touched.contacts[index].phone && formik.errors.contacts[index].phone &&(
                        <div style={{color: 'red'}}>{formik.errors.contacts[index].phone}</div>
                    )}
                </div>


                <div style={{marginBottom: '10px'}}>
                    <label>Relation : </label>
                    <select
                        name="relation"
                        value={formik.values.contacts[index].relation}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select Relation</option>
                        <option value="Parent">Parent</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Child">Child</option>
                        <option value="Friend">Friend</option>
                        <option value="Guardian">Guardian</option>
                    </select>
                    {formik.touched.contacts[index].relation && formik.errors.contacts[index].relation && (
                        <div style={{color: 'red'}}>{formik.errors.contacts[index].relation}</div>
                    )}
                </div>
                <button
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Delete
                    </button>
                <br></br>
                <button type="button" onClick={() => navigate('/bank-details')}>
          Back
        </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EmergencyContacts; 
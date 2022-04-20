import Button from '../../commons/button/FormButton';
import './EditProfile.css'
import { useFormik } from 'formik';
import InputBox from "../../commons/input/InputBox"

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (values.pincode>999999 || values.pincode<100000) {
    errors.pincode = 'Enter valid Pincode';
  } 
  if(!values.myWebsite.endsWith('.com')){
    errors.myWebsite = 'Enter website addresss ';
  }

  return errors;
};


function EditProfile() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      designation: '',
      myWebsite:'',
      gender:'female',
      birthday:'',
      city:'',
      state:'',
      pincode: 0
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      console.log("submitted");
    },
  });

  const data = [
    ["text", "firstName", "First Name", formik.values.firstName, formik.handleChange, formik.handleBlur, formik.errors.firstName],
    ["text", "lastName", "Last Name", formik.values.lastName, formik.handleChange, formik.handleBlur],
    ["text", "designation", "Designation", formik.values.designation, formik.handleChange, formik.handleBlur],
    ["email", "myWebsite", "My Website", formik.values.myWebsite, formik.handleChange, formik.handleBlur, formik.errors.myWebsite],
    ["text", "gender", "Gender", formik.values.gender, formik.handleChange, formik.handleBlur],
    ["date", "birthday", "Birthday", formik.values.birthday, formik.handleChange, formik.handleBlur],
    ["text", "city", "City", formik.values.city, formik.handleChange, formik.handleBlur]
  ]

  return (
    <form className="mt-5 ps-5 d-flex flex-wrap edit-form" onSubmit={formik.handleSubmit}>  
     {data && data.map((item,index) => 
      <InputBox type={item[0]} id={item[1]} name={item[2]} values={item[3]} 
        onchange={item[4]} onblurr={item[5]} key={index}/>
      )}
      <div className='d-flex justify-content-between' style={{ width: "45%" }} >
        <InputBox type="text" id="stateAddress" name="State" values={formik.values.stateAddress} 
          onchange={formik.handleChange} onblurr={formik.handleBlur}/>
        <InputBox type="number" id="pinCode" name="Pin Code" values={formik.values.pinCode} 
          onchange={formik.handleChange} onblurr={formik.handleBlur}/>
      </div>
      <Button color="blue-filled" name="Save"/>
      <Button color="blue" name="Reset All"/>
    </form>
    // <div>Edit profile</div>
  )
}

export default EditProfile
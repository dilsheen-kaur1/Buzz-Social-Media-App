import Button from '../../commons/button/FormButton';
import './EditProfile.css'
import { useEffect } from 'react'
import { useFormik } from 'formik';
import InputBox from "../../commons/input/InputBox"

// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }

//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
//     errors.password = 'Minimum eight characters, at least one letter, one number and one special character';
//   }
//   else if (values.password.length > 20) {
//     errors.password = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };


function EditProfile() {

  useEffect(() => {


  }, [])


  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: ''
  //   },
  //   validate,
  //   validateOnChange: false,
  //   validateOnBlur: false,
  //   onSubmit: values => {
  //     console.log("submitted");

  //   },
  // });

  return (
    <form className="mt-5 ps-5 d-flex flex-wrap edit-form">
      <InputBox type="text" id="firstName" name="First Name" />
      <InputBox type="text" id="lastName" name="Last Name" />
      <InputBox type="text" id="designation" name="Designation" />
      <InputBox type="email" id="myWebsite" name="My Website" />
      <InputBox type="text" id="gender" name="Gender" />
      <InputBox type="date" id="birthday" name="Birthday" />
      <InputBox type="text" id="city" name="City" />
      <div className='d-flex justify-content-between' style={{ width: "45%" }}>
        <InputBox type="text" id="state" name="state" />
        <InputBox type="number" id="pinCode" name="Pin Code" />
      </div>
      <Button color="blue-filled" name="Save"/>
      <Button color="blue" name="Reset All"/>
    </form>
  )
}

export default EditProfile
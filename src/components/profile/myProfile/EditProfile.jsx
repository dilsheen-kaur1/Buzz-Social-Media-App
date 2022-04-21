import Button from '../../commons/button/FormButton';
import './EditProfile.css'
import InputBox from "../../commons/input/InputBox"
import { useFormik } from 'formik';
import {useSelector, useDispatch} from 'react-redux'
import {loginScucess} from '../../../redux/Login/loginAction'
import axios from 'axios';


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (values.pincode > 999999 || values.pincode < 100000) {
    errors.pincode = 'Enter valid Pincode';
  }
  if (values.myWebsite && !values.myWebsite.endsWith('.com')) {
    errors.myWebsite = 'Enter valid website addresss ';
  }

  return errors;
};


function EditProfile() {
  const updateProfile = useSelector(state => state.login)
  const {
    userId
  } = updateProfile

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      designation: '',
      myWebsite: '',
      gender: 'female',
      birthday: '',
      city: '',
      state: '',
      pinCode: 0
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      console.log("submitted");

      axios({
        method: "put",
        url: `http://localhost:3000/api/users/${userId}`,
        // data: json,
        headers: {"Content-Type": "application/json"}
    })
    .then((res) => {    
      if(res.data.email){
        // let {
        //   firstName,lastName,_id,gender,profilePicture,isAdmin,designation,birthday,stateAddress,city,pinCode,myWebsite
        // } = res.data
        // dispatch(setProfilePhoto(profilePicture))
        // dispatch(loginScucess(true, _id,firstName,lastName,gender,designation,myWebsite,birthday,city,stateAddress,pinCode,isAdmin))
        // navigate('/editProfile')
      }
    }).catch(err => {
      console.log(err);
    }) 
    },
  });

  const data = [
    ["text", "firstName", "First Name", formik.values.firstName, formik.handleChange, formik.handleBlur, formik.errors.firstName],
    ["text", "lastName", "Last Name", formik.values.lastName, formik.handleChange, formik.handleBlur],
    ["text", "designation", "Designation", formik.values.designation, formik.handleChange, formik.handleBlur],
    ["text", "myWebsite", "My Website", formik.values.myWebsite, formik.handleChange, formik.handleBlur, formik.errors.myWebsite],
    ["text", "gender", "Gender", formik.values.gender, formik.handleChange, formik.handleBlur],
    ["date", "birthday", "Birthday", formik.values.birthday, formik.handleChange, formik.handleBlur],
    ["text", "city", "City", formik.values.city, formik.handleChange, formik.handleBlur]
  ]

  return (
    <form className="mt-5 ps-5 d-flex flex-wrap edit-form" onSubmit={formik.handleSubmit} novalidate>
      {data && data.map((item, index) => <>
        <InputBox type={item[0]} id={item[1]} name={item[2]} values={item[3]}
          onchange={item[4]} onblurr={item[5]} key={index}
          errors={item[1]==="firstName"? formik.errors.firstName :  item[1]==='myWebsite'?formik.errors.myWebsite:'' }
        />      
      </>
      )}

      <div className='d-flex justify-content-between' style={{ width: "45%" }} >
        <InputBox type="text" id="stateAddress" name="State" values={formik.values.stateAddress}
          onchange={formik.handleChange} onblurr={formik.handleBlur} />
        <InputBox type="number" id="pinCode" name="Pin Code" values={formik.values.pinCode}
          onchange={formik.handleChange} onblurr={formik.handleBlur} errors={formik.errors.pinCode} />
        {
          formik.errors.pinCode ? <div style={{ color: 'red' }}>{formik.errors.pinCode}</div> : null
        }
      </div>
      <Button color="blue-filled" name="Save" />
      <button type="reset"  className='btn btn-outline-primary p-3' onClick={ e => formik.resetForm()}>Reset All</button>
      {/* <Button color="blue" name="Reset All" /> */}
    </form>
  )
}

export default EditProfile
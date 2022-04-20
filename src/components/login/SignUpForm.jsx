import FormButton from '../commons/button/FormButton';
import { useState, useRef } from 'react'
import { useFormik } from 'formik';
import  axios  from 'axios';
import { Form, Row, Col } from 'react-bootstrap'
import axios from "axios";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setUserInfo } from '../../redux/actions/user';
import withRouter from '../../router.js';
import './SignUpForm.css'

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
    errors.password = 'Minimum eight characters, at least one letter, one number and one special character';
  }
  else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  else if(!values.email.endsWith('tothenew.com')){
    errors.email = 'Enter TTN email addresss ';
  }

  return errors;
};

function SignUpForm(props) {
  const {
    loginType
  } = props
  let [showPass, setShowPass] = useState(false);
  let [showName, setShowName] = useState("block");
  let passRef = useRef(null);

  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  const formik = useFormik({
    initialValues: {
      // name: loginType==="Sign Up" ? '' : "undefined",
      name: '',
      email: '',
      password: ''
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      console.log("submitted");
      if(loginType==='Sign In'){
        Login()
      }
       else{
        Signup()
       } 
    },
  });


  const showPassword = () => {
    if (passRef.current.type === 'password') {
      setShowPass(true);
    }
    else {
      setShowPass(false);
    }
  }

  function Login() {
    let json = {
      "email": formik.values.email,
      "password": formik.values.password
    };  
    console.log("1");
    axios({
        method: "post",
        url: "http://localhost:3000/api/auth/login",
        data: json,
        headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err);
    }) 
  }

  function Signup() {
    
    let json = { 
      "name": formik.values.name,
      "email": formik.values.email,
      "password": formik.values.password
    };  
    axios({
        method: "post",
        url: "http://localhost:3000/api/auth/signup",
        data: json,
        headers: {"Content-Type": "application/json"}
    })
    .then(res => {
      console.log(res.data)
<<<<<<< Updated upstream
    }).catch(err => {
      console.log(err);
    }) 
  }
=======
    })
    .catch(err => {
      console.log(err);
    })
  }

>>>>>>> Stashed changes

  async function Login(props) {
    let json = {
      "email": formik.values.email,
      "password": formik.values.password
    };  
    console.log("1");
    axios({
        method: "post",
        url: "http://localhost:3000/api/auth/login",
        data: json,
        headers: {"Content-Type": "application/json"}
    })
    .then( (res) => {
      // console.log(res)
      setUserInfo(res);
      localStorage.setItem("user", JSON.stringify(res));
    }).catch(err => {
      console.log(err);
    }) 
  }
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group as={Row} className="mb-5 justify-content-center w-75 mx-auto" controlId="formPlaintextText"
        style={{ display: loginType === 'Sign Up' ? "flex" : "none" }}>
        <Col sm="10">
          <Form.Control plaintext
            type='text'
            placeholder="Name"
            className='input ps-3'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={loginType==='Sign Up'? formik.values.name:"null"} />
        </Col>
        {formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
      </Form.Group>

      <Form.Group as={Row} className="mb-5 justify-content-center w-75 mx-auto" controlId="formPlaintextEmail">
        <Col sm="10">
          <Form.Control plaintext
            placeholder="Email: abc123@tothenew.com"
            className='input ps-3'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} />
        </Col>
        {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
      </Form.Group>

      <Form.Group as={Row} className="mb-5 justify-content-center w-75 mx-auto" controlId="formPlaintextPassword">
        <Col sm="10" className='d-flex position-relative'>
          <Form.Control plaintext
            ref={passRef}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className='password input ps-3'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password} />

          <img onClick={() => showPassword()}
            src={showPass ? `${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/show.PNG` : `${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/hide.PNG`}
            alt='hide'
            className='eye' />
        </Col>
        {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
        <Col sm="10 text-end mt-3">
          {loginType==='Sign In'? <a href="/">Forgot Password ?</a>:null }
         
        </Col>
      </Form.Group>
      <FormButton name={loginType}
        disabled={formik.values.email.trim() === '' || formik.values.password.trim() === '' || formik.values.name.trim() === ''
        }
        buttonStyle="circular" color="purple" />
      {/* <Button name="Existing User" buttonType="circular" color="fff" borderColor="9816f3" bgColor="9816f3" ml={3}/> */}
    </Form>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setUserInfo}, dispatch);
}

export default compose(connect(mapStateToProps, mapDispatchToProps)) (
  withRouter(SignUpForm)
); 
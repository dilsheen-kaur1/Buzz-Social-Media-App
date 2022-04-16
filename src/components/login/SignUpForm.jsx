import FormButton from '../commons/button/FormButton';
import { useState, useRef } from 'react'
import { useFormik } from 'formik';
import { Form, Row, Col } from 'react-bootstrap'
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

  return errors;
};

function SignUpForm(props) {
  let [showPass, setShowPass] = useState(false);
  let [showName, setShowName] = useState("block");
  let passRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log("submitted");
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

  const {
    loginType
  } = props

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
            value={formik.values.name} />
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
        disabled={formik.values.email.trim() === '' || formik.values.password.trim() === '' || loginType==='Sign Up'?formik.values.name.trim() === '': false
        }
        buttonStyle="circular" color="purple" />
      {/* <Button name="Existing User" buttonType="circular" color="fff" borderColor="9816f3" bgColor="9816f3" ml={3}/> */}
    </Form>
  )
}

export default SignUpForm
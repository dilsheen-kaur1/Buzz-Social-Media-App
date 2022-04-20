import './Login.css';
import FormButton from '../commons/button/FormButton';
import SignUpForm from './SignUpForm'
import {useState} from 'react'
 import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
    let [loginType, setLoginType] = useState('Sign In')

    const changeLoginType = ()=>{
        if(loginType==='Sign Up'){
            setLoginType('Sign In')
        }
        else{
            setLoginType('Sign Up')
        }
    }
    const notify = () => toast.success("You have been registered. Please proceed to login",{
        position: toast.POSITION.BOTTOM_RIGHT
      });

    return (
        <div className="d-flex justify-content-center login">
            <div className='gooogleLogin col-md-6 col-lg-6 text-center'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/logo.PNG`} alt="logo" className='ttn-logo mb-5' />
                <h2>Enter your details and Start your journey with us.</h2>
                <h5>Don't stop until you are proud</h5>
                <FormButton name="Sign In With Google" buttonStyle="circular" color="pink" onSuccess="onSignIn"/>
            </div>
                <div className='emailLogin col-md-6 col-lg-6 text-center'>
                <h3 className='fw-bold mb-5'>{loginType}</h3>
                <SignUpForm loginType={loginType} notify={notify} setLoginType={setLoginType}/>
                <hr/>
                {
                loginType==='Sign Up'?
                <div><span>You already have an account </span><a onClick={()=>changeLoginType()} style={{color: "#9816f3",cursor:'pointer'}}>Sign-In</a></div>
                :
                <div><span>Don't have an account </span><a onClick={()=>changeLoginType()} style={{color: "#9816f3",cursor:'pointer'}}>Sign-Up</a></div> 
                }
            </div> 
                 
        </div>
    )
}

// data-onsuccess="onSignIn"

export default Login
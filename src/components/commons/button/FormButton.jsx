import './FormButton.css';
import {Button} from 'react-bootstrap';
function FormButton(props) {

  const {
    name,
    buttonStyle,
    color,
    disabled,
    onSuccess
  } = props;
  
  // function signOut() {
  //   var auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function () {
  //     console.log('User signed out.');
  //   });
  // }
  return(
    <>
    {
      buttonStyle === 'circular' ? 
      <Button variant="outline-primary" 
        type="submit"
        disabled={disabled}
        className={color==='pink' ? 'g-signin2 pink': color==='purple'? 'circularButton purple':''}
        data-onsuccess={onSuccess!==""?onSuccess :" "}>
          {name}
      </Button>
        :
        <button type="button" className="btn btn-outline-primary">{name}</button>
    }
    {/* <div><a href="#" onclick={signOut}>Sign out</a></div> */}
    </>
  )
    
}

export default FormButton
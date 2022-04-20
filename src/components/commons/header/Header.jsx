import "./Header.css"
import {setProfilePhoto} from '../../../redux/actions/updateProfileAction'
import {useSelector} from 'react-redux'

function Header(props) {
  const{
      name
  }=props
  const updateProfile = useSelector(state => state.updateProfile)

  const{
    profilePhoto
  } = updateProfile

  return (
    <div className="container-fluid px-5 header">
    <header className="d-flex flex-wrap justify-content-center">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/logo.PNG`} alt="logo" className="logo"/>
      </a>

      <ul className="nav nav-pills right-header align-items-center">
        <li className="nav-item me-2"><a href="#" className="nav-link">
            <img src={profilePhoto} alt="user" className="user-image header-user-image"/>
            <span style={{color:"black"}}>dilsheen</span>
        </a></li>
        <li className="nav-item me-3"><a href="#" className="nav-link"><img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/user.PNG`} alt="friend-requests"/></a></li>
        <li className="nav-item"><a href="#" className="nav-link"><img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/down-arrow.PNG`} alt="down-arrow"/></a></li>
      </ul>
    </header>
  </div>
  )
}

export default Header
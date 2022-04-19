import Button from "../../commons/button/FormButton"
import FriendsList from "../../commons/friendList/FriendsList"
import Header from "../../commons/header/Header"
import Common from "../common/Common"
import EditProfile from "../myProfile/EditProfile"
import './UserProfile.css'

function UserProfile(props) {
  const{
    userType
  }=props
  return (
    <>
      {/* <div className="header"> */}
        <Header />
      {/* </div> */}
      <div className="user-profile d-flex"
      style={{height: userType==="user"? "calc(100vh - 5.6rem)" : null}}>
        <div className="user-profile-details pb-5">
          {userType ==="user" ? <>
          <Common />
          <h1 className="ps-5">Sara Woods</h1>
          <h2 className="ps-5">Sarah is the co-founder and COO of video tech add company,</h2>
          <h4 className="ps-5">London . England . United Kingdom . 234 friends</h4>
          <div className="ps-5">
            <Button name="Add Friend" src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/add-user.png`} color="blue-filled"/>
            <Button name="Visit Website" src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/external-link.png`} color="blue"/>
          </div>
          </>
          :
          <>
            <Common type="edit"/>
            <h1 className="ps-5">Sara Woods</h1>
            <EditProfile />
          </>
          
          }   
        </div>
        <div className="friends">
          <FriendsList name="Suggestions"/>
        </div>
      </div>


    </>
  )
}

export default UserProfile
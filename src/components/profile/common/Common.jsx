import './Common.css'

function Common(props) {
  const {
    type
  } = props
  return (
    <div className='common-cover position-relative'>
        <div className="cover-photo">
            <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/cover.jpg`} alt="cover photo" />
        </div>
        <div className='profile-photo'>
            <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="profile photo" className=''/>
            {type=='edit'?
            <>
              <div className='add-photo'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/add-photo.png`} alt="add photo"/>
              </div>
            </>:
            null
          }
            
        </div>
    </div>
    
  )
}

export default Common
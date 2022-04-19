import Search from '../../profile/common/Search'
import './FriendsList.css'

function FriendsList(props) {
    const{
        name
    }= props
  return (
      <div className='friends-list'>
        <div className='d-flex justify-content-between'>
            <h2>{name}</h2>
            <Search />
        </div>
        <div className='suggestions-list mt-3 d-flex flex-column'>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            <div className='d-flex align-items-center suggestions-item mb-4'>
                <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/images/dummy-user.jpg`} alt="" className='user-image me-4'/>
                <h4 className='me-4 mb-0'>Henry Plus</h4>
                {name == "Suggestions" ? 
                    <a href='#'>+Friend</a>
                    : null   
                }
            </div>
            
        </div>
        
    </div>
  )
}

export default FriendsList
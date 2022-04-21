import Search from '../../profile/common/Search'
import './FriendsList.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {setFriendsList} from '../../../redux/Login/loginAction'

function FriendsList(props) {
    const {
        name
    } = props

    const updateProfile = useSelector(state => state.login)

    const {
        userId,
        friends
    } = updateProfile

    const dispatch = useDispatch()
    useEffect(() => {
        axios({
            method: "get",
            url: 'http://localhost:3000/api/users/friends/6260f6c6e0a0638aac0d8d87',
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                console.log(res.data);
                dispatch(setFriendsList(res.data))
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='friends-list'>
            <div className='d-flex justify-content-between'>
                <h2>{name}</h2>
                <Search />
            </div>
            <div className='suggestions-list mt-3 d-flex flex-column'>
                {friends.map((item,index)=>
                    <div className='d-flex align-items-center suggestions-item mb-4'>
                        <img src={item.profilePicture} alt="" className='user-image me-4' />
                        <h4 className='me-4 mb-0'>
                            {item.firstName.charAt(0).toUpperCase()+item.firstName.slice(1)}  <> </> 
                            {(item.lastName !=='' ?  item.lastName.charAt(0).toUpperCase()+item.lastName.slice(1):'')}</h4>
                        {name === "Suggestions" ?
                            <a href='#'>+Friend</a>
                            : null
                        }
                    </div>
                )}

            </div>

        </div>
    )
}

export default FriendsList
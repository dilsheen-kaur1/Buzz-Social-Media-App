import React, { useEffect, useState } from 'react'
import "./Post.css";
import axios from "axios"
import defaultProfilePicture from './defaultProfilePicture.png'

function Post(props) {
  const [userPostId, setUserPostId] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [like, setLike] = useState('');
  useEffect(() => {
    fetchPostData();
  }, []);

  function fetchPostData() {
    let data = localStorage.getItem("user");
    let userId = (JSON.parse(data)).data.user_id;
    // console.log(userId);
    const json = {
      "userId": userId,
    }

    axios({
      method: "get",
      url: `http://localhost:3000/api/feed/allPosts/${userId}`,
      data: json,
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        // console.log(res.data)
        setUserPostId(res.data[0]._id)
        setDesc(res.data[0].description)
        setUrl(res.data[0].url)
        setCreationDate(res.data[0].creationDate)
        // console.log(userId)
        // console.log(desc)
        // console.log(url)
      }).catch(err => {
        console.log(err);
      })
  }

  function likeHandler() {
    const json = {
      "id": userPostId
    }
    axios({
      method: "put",
      url: `http://localhost:3000/api/feed/likes`,
      data: json,
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
       console.log('like increase')
      }).catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="post-wrapper">
      <div className="sort">
        <span>
          <h5>Sort By: &nbsp;</h5>
        </span>
        <select name="Sort" id="Sort" required>
          <option value={'Top'}>Top</option>
          <option value={'Top'}>Top</option>
        </select>
      </div>
      <div className="card-post" >
        <div className="card-header">
          <img src={defaultProfilePicture} className="card-profile-img" alt="" />
          <div className="profile-name">
            {/* <span>{userPostId}</span> */}
            <span className='date-time'>{creationDate.substring(0,10)}</span>
          </div>
        </div>


        <p className='card-desc'>{desc}</p>
        {url ? (
          <img src={url} className="post-img" alt="" />
        ) : null}

        <div className="card-post-bottom">
          <div className="card-post-bottom-left">
            <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/like.png`} alt="" onClick={likeHandler} className="postLike"/>
            <span className="postLikeCounter"> {like} people like it</span>
          </div>
        </div>
        <div className="comment-wrapper">
          <img src={defaultProfilePicture} className="img" alt="" />

          <input type="text" placeholder='Write a comment...' name="comment" />
        </div>
      </div>
    </div>
  )
}

export default Post
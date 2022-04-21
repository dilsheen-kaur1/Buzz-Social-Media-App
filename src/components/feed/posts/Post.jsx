import React, { useEffect, useState } from 'react'
import "./Post.css";
import axios from "axios"
import defaultProfilePicture from './defaultProfilePicture.png'
import { useSelector, useDispatch } from 'react-redux';
import { createPostSuccess, setPostData } from '../../../redux/Post/postAction';

function Post(props) {
  const postData = useSelector(state => state.post)
  const userData = useSelector(state => state.login)

  const { userId, firstName} = userData;
  const {
    _id,
    description,
    url,
    creationDate,
    likes,
    comments,
    createdAt,
    updatedAt,
    postArr
  } = postData;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPostData();
  }, []);

  function fetchPostData() {
    axios({
      method: "get",
      url: `http://localhost:3000/api/feed/allPosts/625a7da95d83fcbfcf5be775`,
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        var postArr = [];
        postArr = res.data;
        //  dispatch(createPostSuccess(_id, description, url, creationDate, likes, comments, userId, createdAt, updatedAt))
        dispatch(setPostData(postArr))
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="post-wrapper">
      {console.log(postArr)}
      {postArr.map((item) => <>
        <div className="card-post" key={item._id}>
          <div className="card-header">
            {/* <img src={defaultProfilePicture} className="card-profile-img" alt="" /> */}
            <div className="profile-name">
              {/* <span>{firstName}</span> */}
              <span className='date-time'>{item.creationDate.subString(0,10)}</span>
            </div>
          </div>


          <p className='card-desc'>{item.description}</p>
          {item.url ? (
            <img src={item.url} className="post-img" alt="" />
          ) : null}

          <div className="card-post-bottom">
            <div className="card-post-bottom-left">
              <img src={`${process.env.REACT_APP_CONTEXT_PATH}/assets/icons/like.png`} alt=""
                // onClick={likeHandler}
                className="postLike"
              />
              <span className="postLikeCounter"> {likes} people like it</span>
            </div>
          </div>
          <div className="comment-wrapper">
            <img src={defaultProfilePicture} className="img" alt="" />

            <input type="text" placeholder='Write a comment...' name="comment" />
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default Post
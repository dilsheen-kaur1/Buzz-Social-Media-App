import React, { useState } from 'react';
import "./CreatePost.css";
import defaultProfilePicture from './defaultProfilePicture.png';
import axios from "axios";

function CreatePost() {
  let data = localStorage.getItem("user");
  let userId = (JSON.parse(data)).data._id;
  const [postText, setPostText] = useState('');

  const uploadFile = (e) => {
    e.preventDefault()
    let file = e.target.uploadFile.files[0]
    let bodyFormData = new FormData()
    bodyFormData.append('photo', file)
    bodyFormData.append('description', postText)
    bodyFormData.append('userId', userId)

    function fetchPostData() {
      axios({
        method: "post",
        url: 'http://localhost:3000/api/feed/post',
        data: bodyFormData,
        headers: { "Content-Type": "undefined" }
      })
        .then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log(err);
        })
    }
    fetchPostData();
  }

  return (
    <div>
      {/* <div className="search-wrapper">
        <img src={defaultProfilePicture} alt="" />
        <input
          type="text"
          className='search-field'
          placeholder='Start a post...'
          name='search'
          // onKeyDown={submitPost}
          onChange={(event) => setPostText(event.target.value)}
          value={postText}
        />

        <span className='photo-logo' onClick={(e) => uploadFile(e)}>
        <input type="file" name="uploadFile" accept="image/jpeg,image/jpg,image/png" />
          {" "}
        </span>
        <span className='photo-video'>Photo/Video</span>
      </div> */}
      <form onSubmit={(e) => uploadFile(e)} className="search-wrapper">
        <input
          type="text"
          className='search-field'
          placeholder='Start a post...'
          name='search'
          // onKeyDown={submitPost}
          onChange={(event) => setPostText(event.target.value)}
          value={postText}
        />
        <input type="file" name="uploadFile" accept="image/jpeg,image/jpg,image/png" className='chooseFile' />
        <input type='submit' className='submit' />

      </form>
    </div>
  );
}

export default CreatePost;  

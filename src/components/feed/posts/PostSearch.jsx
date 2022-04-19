import React, { useState } from 'react';
import "./PostSearch.css";
import defaultProfilePicture from './defaultProfilePicture.png'
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setPost } from "../../../redux/actions/post.js";

function PostSearch(props) {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const selectMedia = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.CLOUDINARY_NAME,
      },
      (error, result) => {
        if(!error && result && result.event === "success") {
          setImageUrl(result.info.url);
        }
      }
    );
    myWidget.open();
  };

  const submitPost = async(e) => {
    const key = e.keyCode;
    if(key === 13 && postText.length > 0) {
      const postObj = {
        description: postText,
        url: imageUrl,
        comments: [],
        createdBy: props.user?.user_id,
      };
      setPostText("");
      setImageUrl("");
      await fetch("http://localhost:3001/api/feed/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(postObj),
      });
      fetchPostData();
    }
  };

  const fetchPostData = async () => {
    let result = await fetch("http://localhost:3001/api/feed/allPosts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const posts = await result.json();
    console.log(posts);
    props.setPost(posts);
  };


  return (
    <div>
      <div className="search-wrapper">
        <img src={props?.user?.profilePicture || defaultProfilePicture} alt="" />
        <input 
          type="text" 
          className='search-field' 
          placeholder='Start a post...' 
          name='search' 
          onKeyDown={submitPost} 
          onChange={(event) => setPostText(event.target.value)} 
          value={postText}
        />

        <span className='photo-logo' onClick={selectMedia}>
          {" "}
        </span>
        <span className='photo-video'>Photo/Video</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  post: state.post
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setPost}, dispatch);
}

export default compose(connect(mapStateToProps, mapDispatchToProps)) (
  PostSearch
);  

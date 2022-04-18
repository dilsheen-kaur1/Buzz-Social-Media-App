import React, { useEffect } from 'react'
import "./Post.css";
import axios from "axios"
import defaultProfilePicture from './defaultProfilePicture.png'
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setPost } from "../../../redux/actions/post.js";

function Post(props) {

  useEffect(() => {
    fetchPostData();
  }, []);

  // const fetchPostData = async () => {
  //   let result = await fetch("http:localhost://3000/api/feed/allPosts", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   const post = await result.json();
  //   props.setPost(post);
  // }

  async function fetchPostData() {
    const json = JSON.stringify({ userId: "dilsheen"});
    const res = await axios.get('http://localhost:3000/api/feed/allPosts', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.data);

    // axios({
    //   method: "get",
    //   url: "http://localhost:3001/api/feed/allPosts",
    //   data: data,
    //   headers: {"Content-Type": "application/json"}
    // })
    // .then(res => {
    //   console.log(res.data)
    // }).catch(err => {
    //   console.log(err);
    // })
 
  }


  return (
    <div className="post-wrapper">
      <div className="sort">
        <span>
          <h5>Sort By:</h5>
        </span>
        <select name="Sort" id="Sort" required>
          <option value={'Top'}>Top</option>
          <option value={'Top'}>Top</option>
        </select>
      </div>

      {props?.post?.post && 
        props?.post?.post.map((item) => {
          return (
            <div className="card-post" key={item._id}>
              <div className="card-header">
                <img src={item?.createdBy?.profilePicture || defaultProfilePicture } className="card-profile-img" alt="" />
                <div className="profile-name">
                  <span>{item?.createdBy?.name}</span>
                  <span className='date-time'>{(new Date(item.creationDate)).toDateString()}</span>
                </div>
              </div>

              <p className='card-desc'>{item.description}</p>
              {item.url ? (
                <img  src={item.url} className="post-img" alt="" />
              ) : null}
              <div className="comment-wrapper">
                <img src={item?.createdBy?.profilePicture || defaultProfilePicture} className="post-img-1" alt="" />

                <input type="text" placeholder='Write a comment...' name="comment" />
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  post: state.post
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setPost}, dispatch);
}

export default compose(connect(mapStateToProps, mapDispatchToProps)) (
  Post
);  
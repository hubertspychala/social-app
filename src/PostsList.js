import React, { Component, useState, useEffect } from "react";
import "./PostsList.css";

import axios from "axios";

const PostsList = (props) => {
  const [latestPosts, setLatestPost] = useState([]);

  function getLatestPosts() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/post/latest",
        {},
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        setLatestPost((prevState) => {
          const result = prevState.concat(res.data);
          console.log(result);
          return result;
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  useEffect(() => {
    getLatestPosts();
  }, []);

  const posts = latestPosts.map((changingArrayToDiv) => {
    return (
      <div className="post-container" key={changingArrayToDiv.id}>
        <div className="post-header">
          <div className="avatar">
            <img src={changingArrayToDiv.user.avatar_url} alt="" />
          </div>
          <div className="nickname"></div>
          <div className="post-date"></div>
        </div>
        <div className="post-content">{changingArrayToDiv.content}</div>
        <div className="post-likes">
          <img className="heart-logo" src="" alt="" />
          <p className="likes-number"></p>
        </div>
      </div>
    );
  });
  console.log(posts);
  return <div className="posts-list">{posts}</div>;
};
export default PostsList;

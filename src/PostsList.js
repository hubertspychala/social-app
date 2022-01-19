import React, { useState, useEffect } from "react";
import "./css/PostsList.css";
import heart from "./icons/heart-svgrepo-com.svg";
import moment from "moment";
import axios from "axios";
import AddPost from "./AddPost";
import Follow from "./Follow";

const PostsList = (props) => {
  const [latestPosts, setLatestPost] = useState([]);
  const [lastPostDate, setLastPostDate] = useState("");
  const [firstPostDate, setFirstPostDate] = useState("");

  function getLatestPosts() {
    console.log(props.user);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
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
        setLatestPost(res.data);
        console.log(res.data);
        setLastPostDate(res.data[res.data.length - 1].created_at);
        setFirstPostDate(res.data[0].created_at);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  function getNewestPosts() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
      },
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/post/newer-then",
        { date: lastPostDate },
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        // setLatestPost(latestPosts.concat(res.data));
        setLatestPost(res.data.concat(latestPosts));
        console.log(res.data);
        setFirstPostDate(res.data[0].created_at);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  useEffect(() => {
    getLatestPosts();
  }, []);

  function getLastPosts() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
      },
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/post/older-then",
        { date: lastPostDate },
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        setLatestPost(latestPosts.concat(res.data));
        console.log(res.data);
        setLastPostDate(res.data[res.data.length - 1].created_at);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  const posts = latestPosts.map((post) => {
    return (
      <div className="post-container" key={post.id}>
        <div className="post-header">
          <div className="avatar">
            <img src={post.user.avatar_url} alt="" />
          </div>
          <div className="name-wrapper">
            <div className="nickname">
              <p>{post.user.username}</p>
            </div>
            <div className="post-date">
              <p>{moment(post.created_at).fromNow()}</p>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <div className="post-likes">
          <img className="heart" height={18} src={heart} alt="heart" />
          <p className="likes-number">{post.likes.length}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      {props.user && <Follow user={props.user} />}{" "}
      {props.user && (
        <AddPost user={props.user} getNewestPosts={getNewestPosts} />
      )}
      <div className="posts-list">{posts}</div>
      <button onClick={getLastPosts}>Pobierz posty</button>
    </div>
  );
};

export default PostsList;

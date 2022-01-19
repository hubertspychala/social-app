import React, { useState, useEffect } from "react";
import "./css/Follow.css";
import axios from "axios";

const Follow = (props) => {
  const [usersYouMayKnow, setusersYouMayKnow] = useState([]);

  function getUserYouMayKnow() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
      },
    };
    console.log(axiosConfig);
    axios
      .post(
        "https://akademia108.pl/api/social-app/follows/recommendations",
        {},
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        setusersYouMayKnow(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }
  useEffect(() => {
    getUserYouMayKnow();
  }, []);

  function followUser(id) {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
      },
    };
    console.log(axiosConfig);
    axios
      .post(
        "https://akademia108.pl/api/social-app/follows/follow",
        {
          leader_id: id,
        },
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        getUserYouMayKnow();
        console.log(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  const usersToFollow = usersYouMayKnow.map((user) => {
    return (
      <div className="user-box" key={user.id}>
        <img className="avatar" src={user.avatar_url} alt="" />
        <h5 className="user-name">{user.username}</h5>
        <button className="follow" onClick={() => followUser(user.id)}>
          Follow
        </button>
      </div>
    );
  });

  return (
    <div className="main-div">
      <h4>People You may know</h4>
      <div className="wrapper">{usersToFollow}</div>
    </div>
  );
};

export default Follow;

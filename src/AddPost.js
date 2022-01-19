import "./css/AddPost.css";
import React, { useState } from "react";
import axios from "axios";

const AddPost = (props) => {
  const [content, setContent] = useState("");

  const handleNewPost = (event) => {
    event.preventDefault();

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + (props.user ? props.user.jwt_token : ""),
      },
    };
    console.log(content);

    axios
      .post(
        "https://akademia108.pl/api/social-app/post/add",
        { content },
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        props.getNewestPosts();
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  return (
    <form className="add-post-wrapper" onSubmit={handleNewPost}>
      <textarea
        name="postArea"
        id="postArea"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add post</button>
    </form>
  );
};

export default AddPost;

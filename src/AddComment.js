import "./css/AddComment.css";
import React, { useState } from "react";
import axios from "axios";

const AddComment = (props) => {
  const [textArea, setTextAreaValue] = useState({
    content: "",
  });

  const handleComment = (event) => {
    event.preventDefault();

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    console.log(textArea.content);

    axios.post("https://akademia108.pl/api/social-app/post/add");
  };

  return (
    <form className="add-post-wrapper" onSubmit={handleComment}>
      <textarea
        name="commentArea"
        id="commentArea"
        cols="30"
        rows="5"
      ></textarea>
      <button type="submit">Add post</button>
    </form>
  );
};

export default AddComment;

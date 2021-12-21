import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";

import { Navigate } from "react-router-dom";


const LoginPage = (props) => {
  const [formValue, setformValue] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValue);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/user/login",
        {
          username: formValue.username,
          password: formValue.password,
          ttl: 3600,
        },
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        localStorage.setItem('user', JSON.stringify(res.data));
        props.setUser(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      {props.user && <Navigate replace to="/" />}
      <p>Login Form</p>
      <input
        type="text"
        name="username"
        placeholder="enter an email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="enter a password"
        value={formValue.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginPage;

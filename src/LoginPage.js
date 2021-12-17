import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";

const LoginPage = () => {
  const [formValue, setformValue] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email);
    loginFormData.append("password", formValue.password);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .post("https://akademia108.pl/api/social-app/user/login", {}, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);

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
      <p>Login Form</p>
      <input
        type="email"
        name="email"
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

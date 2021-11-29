import React from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <div className="login">
      <h2>Login Page </h2>
      <input placeholder="User Name" type="text" />
      <input placeholder="Password" type="text" />
      <button type="submit">Login</button>
    </div>
  );
};
export default LoginPage;

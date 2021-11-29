import React from "react";
import "./SignUpPage.css";

const SignUpPage = (props) => {
  return (
    <div className="login">
      <h2>Sign Up </h2>
      <input placeholder="User Name" type="text" />
      <input placeholder="Email adress" type="email" />
      <input placeholder="Password" type="password" />
      <input placeholder="Confirm password" type="password" />
      <button type="submit">Sign Up</button>
    </div>
  );
};
export default SignUpPage;

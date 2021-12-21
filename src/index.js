import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SocialApp from "./SocialApp";
import reportWebVitals from "./reportWebVitals";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap"
  rel="stylesheet"
></link>;

ReactDOM.render(
  <React.StrictMode>
    <SocialApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

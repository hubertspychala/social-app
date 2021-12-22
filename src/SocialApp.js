import "./SocialApp.css";
import PostsList from "./PostsList";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter,
  // Redirect,
} from "react-router-dom";

function SocialApp() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  return (
    <div className="App">
      <header className="App-header" />
      <BrowserRouter>
        <Routes>
          {/* <Redirect from="/" to="/Feed" /> */}
          <Route path="/" element={<Layout user={user} />}>
            <Route index path="/" element={<PostsList />} />
            <Route
              path="login"
              element={<LoginPage user={user} setUser={setUser} />}
            />
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout(props) {
  let navigate = useNavigate();

  function logout() {
    let userData = localStorage.getItem("user");
    let user = JSON.parse(userData);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.jwt_token,
      },
    };

    axios
      .post(
        "https://akademia108.pl/api/social-app/user/logout",
        {},
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        localStorage.removeItem("user");
        console.log(res.data);

        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  //  {props.user && <Navigate replace to="/" />}

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-link" to="/">
          Social-app
        </Link>
        {!props.user && (
          <Link className="main-nav-link" to="/login">
            Login
          </Link>
        )}
        {!props.user && (
          <Link className="main-nav-link" to="/signUp">
            Sign-up
          </Link>
        )}
        {props.user && (
          <Link className="main-nav-link" to="/" onClick={logout}>
            Logout
          </Link>
        )}
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/login">Go to the home page</Link>
      </p>
    </div>
  );
}

export default SocialApp;

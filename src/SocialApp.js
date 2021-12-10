import "./SocialApp.css";
import PostsList from "./PostsList";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import React, { Component, useState, Redirect } from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter,
  // Redirect,
} from "react-router-dom";

function SocialApp() {
  return (
    <div className="App">
      <header className="App-header" />
      <BrowserRouter>
        <Routes>
          {/* <Redirect from="/" to="/Feed" /> */}
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<PostsList />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-link" to="/">
          Social-app
        </Link>
        <Link className="main-nav-link" to="/login">
          Login
        </Link>
        <Link className="main-nav-link" to="/signUp">
          Sign-up
        </Link>
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
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default SocialApp;

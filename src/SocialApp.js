import "./SocialApp.css";
import PostsList from "./PostsList";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import React, { useState } from "react";
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
  /* Request do logoutu */

  // render() {
  //   const count = 0;
  //   return (
  //     <div>
  //       { count && <h1>Wiadomości: {count}</h1>}
  //     </div>
  //   );
  // }

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
          <Link className="main-nav-link" to="/">
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

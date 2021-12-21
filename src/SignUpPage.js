import React from "react";
import "./SignUpPage.css";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import { Button } from "./Components/Button.style";

const SignUpPage = () => {
  const { handleChange, values, handleSubmit, errors, isSubmitted } =
    useForm(validateInfo);

  return (
    <div className="form-contnet">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <div className="form-inputs">
          <input
            id="username"
            placeholder="Enter your username"
            className="form-input"
            type="text"
            name="username"
            minLength="4"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="email"
            placeholder="Enter your email"
            className="form-input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="password"
            placeholder="Enter your password"
            className="form-input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="password2"
            placeholder="Confirm your password"
            className="form-input"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <br />
        <button>Submit</button>
        <br />
        {isSubmitted ? (
          <div className="succes-message">
            Succes! Thank for your registeration!
          </div>
        ) : null}
        <br />
        <span className="form-input-login">
          Already have an account? Login <a href="/login">here</a>
        </span>
      </form>
    </div>
  );
};

export default SignUpPage;

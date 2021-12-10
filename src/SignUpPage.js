import React, { useState } from "react";
import "./SignUpPage.css";
import useForm from "./useForm";
import validateInfo from "./validateInfo";

const SignUpPage = () => {
  const { handleChange, values, handleSubmit, errors, isSubmitted } =
    useForm(validateInfo);

  return (
    <div className="form-contnet">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
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
          <label htmlFor="email" className="form-label">
            Email
          </label>
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
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
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
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
        <button className="form-input-btn" type="submit">
          Submit
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
      {isSubmitted ? (
        <div className="succes-message">
          Succes! Thank for your registeration!
        </div>
      ) : null}
    </div>
  );
};

export default SignUpPage;

// const SignUpPage = (props) => {
//   const [values, setValues] = useState({
//     userName: "",
//     emailAdress: "",
//     password: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const handleUserNameInputChange = (event) => {
//     setValues({ ...values, userName: event.target.value });
//   };

//   const handleEmailAdressInputChange = (event) => {
//     setValues({ ...values, emailAdress: event.target.value });
//   };

//   const handlePasswordInputChange = (event) => {
//     setValues({ ...values, password: event.target.value });
//   };

//   const handelSubmit = (event) => {
//     event.preventDefault();
//     if (values.userName && values.emailAdress && values.password) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   return (
//     <div className="login">
//       <h2>Sign Up </h2>
//       <form className="register-form" onSubmit={handelSubmit}>
//         <input
//           onChange={handleUserNameInputChange}
//           value={values.userName}
//           placeholder="User Name"
//           type="text"
//           minLength="4"
//         />
//         {submitted && !values.userName ? (
//           <span>Please enter your name</span>
//         ) : null}

//         <input
//           onChange={handleEmailAdressInputChange}
//           value={values.emailAdress}
//           placeholder="Email adress"
//           type="email"
//         />
//         {submitted && !values.emailAdress ? (
//           <span>Please enter your e-mail</span>
//         ) : null}
//         <input
//           onChange={handlePasswordInputChange}
//           placeholder="Password"
//           type="password"
//         />
//         {submitted && !values.password ? (
//           <span>Enter your password</span>
//         ) : null}
//         <input placeholder="Confirm password" type="password" />
//         <button type="submit">Sign Up</button>
//       </form>
//       {submitted && valid ? (
//         <div className="succes-message">
//           Succes! Thank for your registeration!
//         </div>
//       ) : null}
//     </div>
//   );
// };
// export default SignUpPage;

import { useState } from "react";
import validate from "./validateInfo";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    console.log(validate(values));
    if (Object.keys(validate(values)).length !== 0) return;

    let newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .post(
        "http://akademia108.pl/api/social-app/user/signup",
        JSON.stringify(newUser),
        { headers: headers }
      )
      .then((req) => {
        setIsSubmitted(true);

        console.log(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { handleChange, values, handleSubmit, errors, isSubmitted };
};
export default useForm;

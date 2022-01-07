export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!values.email.trim()) {
    errors.email = "Email required";
  }
  if (!values.password.trim()) {
    errors.password = "Password is required";
  }
  if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters";
  } else if (
    values.password.search(/[!,#,@,$,%]/) < 0 &&
    values.password.search(/[0-9]/) < 0 &&
    values.password.length < 8
  ) {
    errors.password =
      "Password needs to be 6 characters, must contain one number and one of charts: ! # @ $ %";
  } else if (values.password.search(/[0-9]/) < 0) {
    errors.password = "Password must contain one number";
  } else if (values.password.search(/[!,#,@,$,%]/) < 0) {
    errors.password = "Password must contain one of charts: ! # @ $ %";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
import { useState } from "react";
import MyTitle from "../../components/title/MyTitle";

function RegisterComp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    usernameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  // Function to validate email format
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  // Function to validate password strength
  function isValidPassword(password) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password);
  }
  function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
  }
  const changeData = (e) => {
    if (e.target.id === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });

      setErrors({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !isValidEmail(e.target.value) && "Please Insert a Valid Email",
      });
    } else if (e.target.id === "name") {
      setUserData({
        ...userData,
        name: e.target.value,
      });

      setErrors({
        ...errors,
        nameErr:
          e.target.value.length === 0
            ? "This Field Is Required"
            : e.target.value.length < 3 && "Name at least 3 characters",
      });
    } else if (e.target.id === "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !isValidPassword(e.target.value) && "type Strong Password",
      });
    } else if (e.target.id === "confirmPassword") {
      setUserData({
        ...userData,
        confirmPassword: e.target.value,
      });

      setErrors({
        ...errors,
        confirmPasswordErr:
          e.target.value.length === 0
            ? "This Field Is Required"
            : !passwordsMatch(userData.password, e.target.value) &&
              "Passwords do not match",
      });
    } else if (e.target.id === "username") {
      setUserData({
        ...userData,
        username: e.target.value,
      });

      setErrors({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "This Field Is Required"
            : e.target.value.length > 10 &&
              "invalid username (maximum 10 characters)",
      });
    }
  };
  // ////////////////////////////////
  const submitData = (e) => {
    if (!errors.passwordErr || !errors.emailErr) {
      e.preventDefault();
      alert("Form submitted successfully");
    }
  };
  return (
    <>
      <MyTitle />
      <div className="d-flex justify-content-center align-items-center ">
        <form onSubmit={(e) => submitData(e)}>
          <div className="mb-3">
            <label className="form-label text-white fw-bold">Name</label>
            <input
              type="text"
              className={`form-control  ${
                errors.nameErr ? "border-danger" : "border-success"
              }`}
              value={userData.name}
              onChange={(e) => changeData(e)}
              id="name"
            />
            <p className="text-danger"> {errors.nameErr} </p>
          </div>
          <div className="mb-3">
            <label className="form-label text-white fw-bold">Email</label>
            <input
              type="text"
              className={`form-control  ${
                errors.emailErr ? "border-danger" : "border-success"
              }`}
              value={userData.email}
              onChange={(e) => changeData(e)}
              id="email"
            />
            <p className="text-danger"> {errors.emailErr} </p>
          </div>

          <div className="mb-3">
            <label className="text-white fw-bold">username</label>
            <input
              type="text"
              className={`form-control ${
                errors.usernameErr ? "border-danger" : "border-success"
              }`}
              value={userData.username}
              id="username"
              onChange={(e) => changeData(e)}
            />
            <p className="text-danger"> {errors.usernameErr} </p>
          </div>
          <div className="mb-3">
            <label className="form-label text-white fw-bold">Password</label>
            <input
              type="text"
              className={`form-control ${
                errors.passwordErr ? "border-danger" : "border-success"
              }`}
              value={userData.password}
              onChange={(e) => changeData(e)}
              id="password"
            />
            <p className="text-danger"> {errors.passwordErr} </p>
          </div>
          <div className="mb-3">
            <label className="form-label text-white fw-bold">
              Confirm Password
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.confirmPasswordErr ? "border-danger" : "border-success"
              }`}
              value={userData.confirmPassword}
              onChange={(e) => changeData(e)}
              id="confirmPassword"
            />
            <p className="text-danger"> {errors.confirmPasswordErr} </p>
          </div>

          <button
            disabled={
              errors.passwordErr ||
              errors.emailErr ||
              errors.confirmPasswordErr ||
              errors.nameErr
                ? true
                : false
            }
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterComp;

import { useState } from "react";
import MyTitle from "../../components/title/MyTitle";
import { useNavigate } from "react-router-dom";

function LoginComp() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "example@example.com",
    password: "enter strong password here",
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  // Function to validate email format
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  // Function to validate password strength
  // function isValidPassword(password) {
  //   return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password);
  // }

  const changeData = (e) => {
    if (e.target.name === "email") {
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
    } else {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length === 0 ? "This Field Is Required" : false,
      });
    }
  };

  const submitData = (e) => {
    if (!errors.passwordErr || !errors.emailErr) {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <>
      <MyTitle />
      <div className="d-flex justify-content-center form-container  ">
        <form onSubmit={(e) => submitData(e)}>
          <div className="mb-4">
            <label className="form-label text-white fs-4 fw-bold">Email</label>
            <input
              type="text"
              className={`form-control  ${
                errors.emailErr ? "border-danger" : "border-success"
              }`}
              placeholder={userData.email}
              onChange={(e) => changeData(e)}
              name="email"
            />
            <p className="text-danger"> {errors.emailErr} </p>
          </div>
          <div className="mb-3">
            <label className="form-label text-white fs-4 fw-bold">
              Password
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.passwordErr ? "border-danger" : "border-success"
              }`}
              placeholder={userData.password}
              onChange={(e) => changeData(e)}
              name="password"
            />
            <p className="text-danger"> {errors.passwordErr} </p>
          </div>
          <hr className="hr text-white" />
          <button
            disabled={errors.passwordErr || errors.emailErr ? true : false}
            type="submit"
            className="btn btn-primary "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginComp;

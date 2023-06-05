import React, { useState } from "react";
import "./SignUpForm.css";
import { Navigate } from "react-router-dom";
import $ from "jquery";

// ##########################################################
// SignUpForm: is the form that is going to be show to the user
//             in a modal component to sign up into the app

const SignUpForm = ({ signup }) => {
  const INITIAL_STATE = {
    username_SignUp: "",
    password_SignUp: "",
    password1: "",
    firstName: "",
    lastName: "",
    email: "",
    zip_code: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.setCustomValidity("");
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password_SignUp !== formData.password1) {
      setError("Passwords do NOT match");
      return;
    }
    // Checking that the password that is enter is the Same
    delete formData.password1;
    let data = {
      username: formData.username_SignUp,
      password: formData.password_SignUp,
      ...formData,
    };
    delete data.username_SignUp;
    delete data.password_SignUp;

    const resp = await signup({ ...data });
    // On a good response the Modal will close by triggering a click on the btn
    if (resp === true) {
      $("#closeBtnSignUp").trigger("click");
      return;
    }
    setError(resp);
  }

  // Validation to check that user enter correct email format and password format
  const erroMsg = (e) => {
    if (e.target.id === "email") {
      e.target.setCustomValidity("Enter in the format: name@sample.com");
    }
    if (e.target.id === "password") {
      e.target.setCustomValidity(
        "At least 1 Uppercase, Lowercase, Number, Symbol, Min 8 chars"
      );
    }
  };

  return (
    <>
      <div className="container SignUpForm">
        <h1>Sign Up</h1>
        {error === true ? (
          // If there is no Error is all good and we Redirect to Home
          <Navigate exact="true" to="/" />
        ) : (
          <h5 style={{ color: "red", fontSize: "18px", textAlign: "center" }}>
            {/* Using the error that is coming from the BackEnd */}
            {/* Controlled the Email with a Regex pattern */}
            <span> {error} </span>
          </h5>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username_SignUp">Username: </label>
            <input
              className="form-control"
              required
              id="username_SignUp"
              type="text"
              name="username_SignUp"
              placeholder="Username"
              value={formData.username_SignUp}
              onChange={handleChange}
            ></input>
          </div>
          <div className="">
            <div className="form-group">
              <label htmlFor="password_SignUp">Password: </label>
              <input
                className="form-control"
                required
                id="password_SignUp"
                type="password"
                name="password_SignUp"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                onInvalid={erroMsg}
                value={formData.password_SignUp}
                onChange={handleChange}
              ></input>
              <label htmlFor="password1">Confirm Password: </label>
              <input
                className="form-control"
                required
                id="password1"
                type="password"
                name="password1"
                placeholder=""
                value={formData.password1}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              className="form-control"
              required
              id="firstName"
              type="text"
              name="firstName"
              placeholder=""
              value={formData.firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              className="form-control"
              required
              id="lastName"
              type="text"
              name="lastName"
              placeholder=""
              value={formData.lastName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              required
              id="email"
              type="text"
              name="email"
              placeholder=""
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onInvalid={erroMsg}
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="zip_code">Zip Code: </label>
            <input
              className="form-control"
              id="zip_code"
              type="number"
              name="zip_code"
              placeholder="Optional"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onInvalid={erroMsg}
              value={formData.zip_code}
              onChange={handleChange}
            ></input>
          </div>
          <br></br>
          <button className="btn nav-btn btnSignUp float-right">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
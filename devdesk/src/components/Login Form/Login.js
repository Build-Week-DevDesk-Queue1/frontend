import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const WrapperForm = styled.form`
  background: #ff6332;
  padding: 40px 60px;
  border: 1px solid #777;
  padding-bottom: 10px;
  max-width: 45%;
  margin: 30px auto;
  border-radius: 2%;
  margin-bottom: 6%;
  box-shadow: 1px 10px 21px -7px rgba(48, 47, 42, 1);
`;

export default function Form() {
  const [Input, setInput] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleChange = event => {
    setInput({ ...Input, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    if (!Input.username && !Input.password) {
      return;
    }

    axios
      .post("https://the-queue1.herokuapp.com/api/auth/login", {
        username: Input.username,
        password: Input.password
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <h1>DevDesk.</h1>
      <div className="form-container">
        <p className="motto">We're here to help.</p>
        <div className="center">
          <button
            type="button"
            id="signup"
            className="submit-btn"
            onClick={() => history.push("/registration")}
          >
            Sign Up for Free
          </button>
        </div>

        <WrapperForm id="login-form" onSubmit={submitForm}>
          <div className="button-option"></div>
          <div className="form-option">
            <label className="active" htmlFor="email" id="email-label">
              Email:{" "}
            </label>
            <input
              type="text"
              onChange={handleChange}
              className="active"
              placeholder="What's your username?"
              value={Input.username}
              name="username"
              required
            />
          </div>
          <div className="form-option">
            <label className="active" htmlFor="password" id="password-label">
              Password:{" "}
            </label>
            <input
              type="password"
              onChange={handleChange}
              className="active"
              placeholder="What's your password?"
              value={Input.password}
              name="password"
              required
            />
          </div>
          <button type="submit" id="create" className="submit-btn">
            Login
          </button>
        </WrapperForm>
      </div>
    </>
  );
}

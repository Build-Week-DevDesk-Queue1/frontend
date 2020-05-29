import React, { useState } from "react";
import "./Login.css"
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
    <p className="motto">We're here to help.</p>
    <div className="form-container">
        <div id="wrapper">
        <span style={{color: "Dodgerblue", paddingBottom: "10px"}}>
        <i class="fas fa-laptop fa-3x"></i>
        </span>
        <h3>Please Login</h3>
        <form onSubmit={submitForm}>
            <div className="form-option">
        <label className="active" htmlFor="email"><span>Username:{""}</span></label>
        <input type="email" onChange={handleChange} placeholder="What's your username?" value={Input.username} name="username" required/>
        </div>
        <div className="form-option">
            <label className="active" htmlFor="password"><span>Password:{""}</span></label>
        <input type="password" onChange={handleChange} placeholder="What's your password?" value={Input.password} name="password" required/>
         </div>
         <button className="login-btn" type="submit">Login</button>
        </form>
        <div className="signup">
            <p>Not a member? <Link activeClassName="selected" to="/registration">Sign up for free!</Link></p>
        </div>
        </div>
      <button className="end-motto" onClick={() => history.push("/helper")}> <p>Not a student? Click here.</p></button>
    </div>
    </>
)
    }

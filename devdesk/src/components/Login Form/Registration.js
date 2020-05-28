import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./registration.css";
import { Button, Label } from "reactstrap";
import { userAction } from "../../actions";
const { registerUser } = userAction;

const Register = styled.form`
  background: #007aff;
  padding: 40px 60px;
  border: 1px solid #777;
  padding-bottom: 10px;
  max-width: 45%;
  margin: 30px auto;
  border-radius: 2%;
  margin-bottom: 6%;
  box-shadow: 1px 10px 21px -7px rgba(48, 47, 42, 1);
`;

export default function Registration() {
  const [Input, setInput] = useState({
    username: "",
    password: "",
    select: "select here"
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = event => {
    setInput({ ...Input, [event.target.name]: event.target.value });
  };

  const handleSelectionChange = event => {
    setInput({ ...Input, select: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    if (!Input.username && !Input.password) {
      return;
    }

    if (Input.select === "select here") {
      return;
    }

    let newUser;
    let id = new Date().getTime();

    if (Input.select === "student") {
      newUser = {
        username: Input.username,
        password: Input.password,
        student_id: id
      };
    }

    if (Input.select === "helper") {
      newUser = {
        username: Input.username,
        password: Input.password,
        helper_id: id
      };
    }

    dispatch(registerUser(newUser));
  };

  return (
    <div className="box-container">
      <div className="main-info">
        <h1 id="title">Registration Form</h1>
        <p id="description">Please fill out the following:</p>
      </div>

      <Register id="survey-form" onSubmit={submitForm}>
        <div className="form-option">
          <Label htmlFor="name" className="active" id="name-label">
            Name:{" "}
          </Label>
          <input
            type="text"
            className="form"
            id="name"
            placeholder="Enter username"
            name="username"
            onChange={handleChange}
            value={Input.username}
            required
          />
        </div>
        <div className="form-option">
          <Label htmlFor="password" className="active" id="name-label">
            Password:{" "}
          </Label>
          <input
            type="password"
            className="form"
            id="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            value={Input.password}
            required
          />
        </div>
        <div className="form-option">
          <p>Which role are you currently applying?</p>
          <select
            value={Input.select}
            onChange={handleSelectionChange}
            id="dropdown"
            className="form"
          >
            <option disabled value="select here">
              Select Here:
            </option>
            <option value="helper">Helper</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="form-option">
          <Button type="submit" id="submit-button" className="submit-btn">
            Submit
          </Button>
        </div>
      </Register>
    </div>
  );
}

import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import "./registration.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = styled.form `
background: #F39C11;
padding: 40px 60px;
padding-bottom: 10px;
max-width: 45%;
margin: 30px auto;
border-radius: 2%;
margin-bottom: 6%;
box-shadow: 1px 10px 21px -7px rgba(48,47,42,1);
`

export default function Registration() {
    const [Input, setInput] = useState({ name: '', email: '', password: '', select: 'student'});
    const history = useHistory();

    const handleChange = event => {
        setInput({...Input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
    }


    return (
        <div className="box-container">
        <div className="main-info">
        <h1 id="title">Registration Form</h1>
        <p id="description">Please fill out the following:</p>
        </div>
        
        <Register id="survey-form" onSubmit={submitForm}>
          <div className="form-option">
          <Label htmlFor="name" id="name-label">Name: </Label>
          <input type="text" class="form" id="name" placeholder="Enter your name" name="name" onChange={handleChange} value={Input.name} required/>
          </div>
          <div className="form-option">
          <Label htmlFor="email" id="email-label">Email: </Label>
          <input type="email" class="form" id="email" placeholder="Enter your email" name="email" onChange={handleChange} value={Input.email} required/>
          </div>
          <div className="form-option">
          <Label htmlFor="password" id="name-label">Password: </Label>
          <input type="password" class="form" id="password" placeholder="Enter your name" name="password" onChange={handleChange} value={Input.password} required/>
          </div>
          <div className="form-option">
          <p>Which role are you currently applying?</p>
          <select id="dropdown" class="form">
            <option disabled selected value>Select Here:</option>
            <option value="helper">Helper</option>
            <option value="student">Student</option>
          </select>
          </div>
    <div className="form-option">
    <Button type="submit" id="submit" class="submit-btn">Submit</Button>
    </div>
    </Register>
    </div>
    )
}
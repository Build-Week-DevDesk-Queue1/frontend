import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import "./registration.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = styled.form `
background: #007AFF;
padding: 40px 60px;
border: 1px solid #777;
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
          <Label htmlFor="name" className="active" id="name-label">Name: </Label>
          <input type="text" className="form" id="name" placeholder="Enter your name" name="name" onChange={handleChange} value={Input.name} required/>
          </div>
          <div className="form-option">
          <Label htmlFor="email" className="active" id="email-label">Email: </Label>
          <input type="email" className="form" id="email" placeholder="Enter your email" name="email" onChange={handleChange} value={Input.email} required/>
          </div>
          <div className="form-option">
          <Label htmlFor="password" className="active" id="name-label">Password: </Label>
          <input type="password" className="form" id="password" placeholder="Enter your password" name="password" onChange={handleChange} value={Input.password} required/>
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
    <Button type="submit" id="submit-button" class="submit-btn">Submit</Button>
    </div>
    </Register>
    </div>
    )
}
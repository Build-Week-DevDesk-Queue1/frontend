import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Login from "./Login";

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
        
        <form id="survey-form" onSubmit={submitForm}>
          <div className="form-option">
          <label htmlFor="name" id="name-label">Name: </label>
          <input type="text" class="form" id="name" placeholder="Enter your name" name="name" onChange={handleChange} value={Input.name} required/>
          </div>
          <div className="form-option">
          <label htmlFor="email" id="email-label">Email: </label>
          <input type="email" class="form" id="email" placeholder="Enter your email" name="email" onChange={handleChange} value={Input.email} required/>
          </div>
          <div className="form-option">
          <label htmlFor="password" id="name-label">Name: </label>
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
    <button type="submit" id="submit" class="submit-btn">Submit</button>
    </div>
    </form>
    </div>
    )
}
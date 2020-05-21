import React from "react";
import {Link} from "react-router-dom";
import Login from "./Login";

export default function Registration() {
    return (
        <div className="box-container">
        <div className="main-info">
        <h1 id="title">Registration Form</h1>
        <p id="description">Please fill out the following:</p>
        </div>
        
        <form id="survey-form">
          <div className="form-option">
          <label htmlFor="name" id="name-label">Name: </label>
          <input type="text" class="form" id="name" placeholder="Enter your name" required/>
          </div>
          <div className="form-option">
          <label htmlFor="email" id="email-label">Email: </label>
          <input type="email" class="form" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="form-option">
          <label htmlFor="age" id="number-label">Age: </label>
          <input type="number" class="form" min="10" max="90" placeholder="Age" id="number"/>
          </div>
          <div className="form-option">
          <p>Which role are you currently applying?</p>
          <select id="dropdown" class="form">
            <option disabled selected value>Select Here:</option>
            <option>Helper</option>
            <option>Student</option>
          </select>
          </div>
    <div className="form-option">
    <p>Any other comments?<span class="extra">(optional)</span></p>
    <textarea id="background" className="input-text" name="comments" placeholder="Enter your summary here..."></textarea>
    </div>
    <div className="form-option">
    <button type="submit" id="submit" class="submit-btn">Submit</button>
    </div>
    </form>
    </div>
    )
}
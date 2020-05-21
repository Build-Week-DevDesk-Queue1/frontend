import React, {useState} from "react";
import "./Login.css";
import {useHistory, Link, Route} from "react-router-dom";


export default function Form() {
    const [Input, setInput] = useState({ email: '', password: ''});

    const handleChange = event => {
        setInput(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault();
    }

return (
    <div className="form-container">
        <p className="motto">We're here to help.</p>
        <p className="motto" id="question">Create a help ticket and we'll connect you with a Lambda School Helper. Not a student? Click here.</p>
        <form id="login-form" onSubmit={submitForm}>
            <div className="form-option">
        <label htmlFor="email" id="email-label">Email: </label>
        <input type="email" className="form" placeholder="Enter your email" value={Input.email} required/>
        </div>
        <div className="form-option">
            <label htmlFor="password" id="password-label">Password: </label>
        <input type="password" className="form" placeholder="Enter your password" value={Input.password} required/>
         </div>
         <div class="form-option">
<button type="submit" id="submit" className="submit-btn" onClick={useHistory.push("/registration")}>Register</button>
<button type="submit" id="create" className="submit-btn">Login</button>
        </div>
        </form>
    </div>
)
}
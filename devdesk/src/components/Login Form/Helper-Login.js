import React, {useState} from "react";
import "./Login.css";
import {useHistory} from "react-router-dom";

export default function HelperForm() {
    const [Input, setInput] = useState({ email: '', password: ''});
    const history = useHistory();

    const handleChange = event => {
        setInput({...Input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
    }
    return(
        <div className="form-container">
        <p className="motto">Welcome Helper!</p>
        <form id="login-form" onSubmit={submitForm}>
            <div className="form-option">
        <label htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="form" placeholder="Enter your email" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="form" placeholder="Enter your password" value={Input.password} name="password" required/>
         </div>
         <div class="form-option">
<button type="button" id="submit" className="submit-btn" onClick={() => history.push("/registration")}>Register</button>
<button type="submit" id="create" className="submit-btn">Login</button>
        </div>
        </form>
    </div>

    )
}
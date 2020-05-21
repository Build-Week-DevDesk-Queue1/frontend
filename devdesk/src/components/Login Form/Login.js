import React, {useState} from "react";
import "./Login.css";

export default function Form() {
return (
    <div className="form-container">
        <p className="motto">We're here to help.</p>
        <form id="login-form">
            <div className="form-option">
        <label for="email" id="email-label">Email: </label>
        <input type="email" className="form" placeholder="Enter your email" required/>
        </div>
        <div className="form-option">
            <label for="password" id="password-label">Password: </label>
        <input type="password" className="form" placeholder="Enter your password" required/>
         </div>
         <div class="form-option">
<button type="submit" id="submit" className="submit-btn">Submit</button>
<button type="submit" id="create" className="submit-btn">Create Account</button>
        </div>
        </form>
    </div>
)
}
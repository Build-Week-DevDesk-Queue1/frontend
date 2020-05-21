import React, {useState} from "react";
import "./Login.css";

export default function Form() {
return (
    <div className="form-container">
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
<button type="submit" id="submit" class="submit-btn">Submit</button>
</div>
        </form>
        <div className="alert-role">
        <p>Welcome ...</p>
        </div>
    </div>
)
}
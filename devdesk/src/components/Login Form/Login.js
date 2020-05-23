import React, {useState} from "react";
import "./Login.css";
import {useHistory, Link, Route} from "react-router-dom";


export default function Form() {
    const [Input, setInput] = useState({ email: '', password: ''});
    const history = useHistory();

    const handleChange = event => {
        setInput({...Input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();

        const data = await fetch( '' );
        let message = "";

        try {
            (async () => {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            // history.push("to queue page");
            })
        } catch (err) {
            alert(err.message);
        }
    }

return (
    <>
    <h1>Welcome to DevDesk</h1>
    <div className="form-container">
        <p className="motto">We're here to help.</p>
        <p className="motto" id="question">Create a help ticket and we'll connect you with a Lambda School Helper. Not a student? <span style={{color: "red", cursor: "pointer"}} onClick={() => history.push("/helper")}>Click here.</span></p>
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
    </>
)
}
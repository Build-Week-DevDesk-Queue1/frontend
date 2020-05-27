import React, {useState} from "react";
import "./Login.css";
import {useHistory, Link, Route} from "react-router-dom";
import styled from "styled-components"

const WrapperForm = styled.form `
background: #FF6332;
padding: 40px 60px;
border: 1px solid #777;
padding-bottom: 10px;
max-width: 45%;
margin: 30px auto;
border-radius: 2%;
margin-bottom: 6%;
box-shadow: 1px 10px 21px -7px rgba(48,47,42,1);
`


export default function Form() {
    const [Input, setInput] = useState({ email: '', password: ''});
    const history = useHistory();

    const handleChange = event => {
        setInput({...Input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        // push post request to login endpoints here
    }

return (
    <>
    <h1>DevDesk.</h1>
    <div className="form-container">
        <p className="motto">We're here to help. Sign up for free.</p>
        <p className="motto" id="question">Create a help ticket and we'll connect you with a Lambda School Helper. Not a student? <span style={{cursor: "pointer"}} onClick={() => history.push("/helper")}>Click here.</span></p>

        <WrapperForm id="login-form" onSubmit={submitForm}>
        <div class="button-option">
<li className="active"><button type="button" id="submit" className="submit-btn" onClick={() => history.push("/registration")}>Register</button></li>
<li><button type="submit" id="create" className="submit-btn">Login</button></li>
        </div>
            <div className="form-option">
        <label className="active" htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="active" placeholder="What's your email?" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label className="active" htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="active" placeholder="What's your password?" value={Input.password} name="password" required/>
         </div>
        </WrapperForm>
    </div>
    </>
)
}
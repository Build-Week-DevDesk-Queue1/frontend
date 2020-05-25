import React, {useState} from "react";
import "./Login.css";
import {useHistory, Link, Route} from "react-router-dom";
import styled from "styled-components"

const WrapperForm = styled.form `
background: rgba(1, 50, 67, 1);
padding: 40px 60px;
padding-bottom: 10px;
max-width: 45%;
margin: 30px auto;
border-radius: 2%;
margin-bottom: 6%;
box-shadow: 0 4px 10px 4px rgba(#13232f, .2);
`


export default function Form() {
    const [Input, setInput] = useState({ email: '', password: ''});
    const history = useHistory();

    const handleChange = event => {
        setInput({...Input, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();

        // const data = await fetch( '' );
        // let message = "";

        // try {
        //     (async () => {
        //     await Auth.signIn(email, password);
        //     userHasAuthenticated(true);
        //     // history.push("to queue page");
        //     })
        // } catch (err) {
        //     alert(err.message);
        // }
    }

return (
    <>
    <h1>DevDesk.</h1>
    <div className="form-container">
        <p className="motto">We're here to help. Sign up for free.</p>
        <p className="motto" id="question">Create a help ticket and we'll connect you with a Lambda School Helper. Not a student? <span style={{color: "red", cursor: "pointer"}} onClick={() => history.push("/helper")}>Click here.</span></p>

        <WrapperForm id="login-form" onSubmit={submitForm}>
        <div class="button-option">
<li className="active"><button type="button" id="submit" className="submit-btn" onClick={() => history.push("/registration")}>Register</button></li>
<li><button type="submit" id="create" className="submit-btn">Login</button></li>
        </div>
            <div className="form-option">
        <label htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="form" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="form" value={Input.password} name="password" required/>
         </div>
        </WrapperForm>
    </div>
    </>
)
}
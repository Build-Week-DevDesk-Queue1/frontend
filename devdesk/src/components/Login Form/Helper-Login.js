import React, {useState} from "react";
import "./Helper.css";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.form `
background: #F39C11;
padding: 40px 60px;
padding-bottom: 10px;
max-width: 45%;
margin: 30px auto;
border-radius: 2%;
margin-bottom: 6%;
box-shadow: 1px 10px 21px -7px rgba(48,47,42,1);
`

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
        <div className="form-box">
        <p className="motto">Welcome Helper!</p>
        <Wrapper id="login-form" onSubmit={submitForm}>
            <div className="form-option">
            <div class="button-box">
<li className="active"><button type="button" id="submit" className="submit-btn" onClick={() => history.push("/registration")}>Register</button></li>
<li><button type="submit" id="create" className="submit-btn">Login</button></li>
</div>
        <label className="active" htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="form" placeholder="What's your email?" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label className="active" htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="form" placeholder="What's your password?" value={Input.password} name="password" required/>
         </div>
        </Wrapper>
    </div>

    )
}
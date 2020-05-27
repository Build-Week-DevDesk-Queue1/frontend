import React, {useState} from "react";
import "./Helper.css";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import { Button } from 'reactstrap';

const Wrapper = styled.form `
background: #A0E0BB;
border: 1px solid #777;
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
        <Button color="primary" type="button" id="signup" className="submit-btn" onClick={() => history.push("/registration")}>Sign Up?</Button>
        <Wrapper id="login-form" onSubmit={submitForm}>
            <div className="form-option">
        <label className="active" htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="form" placeholder="What's your email?" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label className="active" htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="form" placeholder="What's your password?" value={Input.password} name="password" required/>
         </div>
         <button type="submit" id="create" className="submit-btn">Login</button>
        </Wrapper>
    </div>

    )
}
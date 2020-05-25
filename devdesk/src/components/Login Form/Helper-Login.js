import React, {useState} from "react";
import "./Helper.css";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

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
        <WrapperForm id="login-form" onSubmit={submitForm}>
            <div className="form-option">
            <div class="button-box">
<li className="active"><button type="button" id="submit" className="submit-btn" onClick={() => history.push("/registration")}>Register</button></li>
<li><button type="submit" id="create" className="submit-btn">Login</button></li>
</div>
        <label htmlFor="email" id="email-label">Email: </label>
        <input type="email" onChange={handleChange} className="form" value={Input.email} name="email" required/>
        </div>
        <div className="form-option">
            <label htmlFor="password" id="password-label">Password: </label>
        <input type="password" onChange={handleChange} className="form" value={Input.password} name="password" required/>
         </div>
        </WrapperForm>
    </div>

    )
}
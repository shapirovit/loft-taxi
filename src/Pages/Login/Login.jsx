import React from 'react';
import Form from '../../Components/Form';
import './Login.css';
import { Logo } from 'loft-taxi-mui-theme';

const Login = (props) => {

    return (
        <div className="login-page">
            <div className="login-page-logo">
                <Logo white={"true"} animated={"true"} />
            </div>
            <Form handleClick={props.handleClick} />
        </div>
        
    ) 

}

export default Login;
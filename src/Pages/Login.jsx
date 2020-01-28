import React from 'react';
import Form from '../Components/Form.jsx';

const Login = (props) => {

    return (
        <>
            <h1>Войдите в свой аккаунт</h1>
            <Form handleClick={props.handleClick} />
        </>
        
    ) 

}

export default Login;
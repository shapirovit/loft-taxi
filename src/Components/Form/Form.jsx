import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { Logo } from 'loft-taxi-mui-theme';
import { Button, FormLabel, Link, Input, FormHelperText, theme, MuiButton } from '@material-ui/core';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            firstName: "",
            lastName: "",
            isReg: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    static propTypes = {
        handleClick: PropTypes.func.isRequired
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleClick({id: "map", isLogin: "true"});
    }

    handleReg = event => {
        event.preventDefault();
        this.setState((state) => ({ isReg: !state.isReg }),  () => {console.log("this.state.isReg=", this.state.isReg);} );
    }

    handleChange = event => {
        console.log("event.target=", event.target);
        console.log("event.target.name=", event.target.name);

        const { name } = event.target;
        this.setState( { [name]: event.target.value });
    }

    render() {
        const { login, password, firstName, lastName } = this.state;
        
        return (
            <div className="form-signin">
                <div className="form-signin-header">{this.state.isReg ? "Войти" : "Регистрация"}</div>
                <div className="form-signin-text">{this.state.isReg ? "Новый пользователь? " : "Уже зарегистрирован? "}
                    <a href="/sign" onClick={this.handleReg} >{this.state.isReg ? "Зарегистрироваться" : "Войти"}</a>
                </div>

                <form onSubmit={this.handleSubmit}>                    
                    <FormLabel>
                    Имя пользователя*
                    <Input
                        name="login"
                        type="text"
                        value={login}
                        onChange={this.handleChange}
                    />
                    </FormLabel>
                    { !this.state.isReg &&
                        <>
                            <label>
                            Введите своё имя:
                            <input
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={this.handleChange}
                            />
                            </label>
                            <label>
                            Введите свою фамилию:
                            <input
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={this.handleChange}
                            />
                            </label>                            
                        </>                        
                    }
                    <label>
                    Пароль*
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    </label>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"

                    >
                        { this.state.isReg ? "Войти" : "Зарегистрироваться"}
                    </Button>
                </form>
            </div>

        );
    }    
}

export default Form;
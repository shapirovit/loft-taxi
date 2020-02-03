import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { Logo } from 'loft-taxi-mui-theme';
import { Button, FormLabel, Link, Input, FormHelperText, theme, MuiButton } from '@material-ui/core';

const { Component } = React;


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
            <>
                <a href="/sign" onClick={this.handleReg} >{this.state.isReg ? "Зарегистрироваться" : "Войти"}</a>

                <form onSubmit={this.handleSubmit}>
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
                    <FormLabel>
                    Введите свой логин:
                    <Input
                        name="login"
                        type="text"
                        value={login}
                        onChange={this.handleChange}
                    />
                    </FormLabel>
                    <label>
                    Введите свой пароль:
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    </label>
                    <input type="submit" value={ this.state.isReg ? "Войти" : "Зарегистрироваться"} />
                </form>
                <button>Новая кнопка</button>
                <Logo />
                <Button>Кастомная кнопка</Button>
            </>

        );
    }    
}

export default Form;
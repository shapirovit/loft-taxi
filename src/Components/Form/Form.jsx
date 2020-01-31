import React from 'react';
import './Form.css';

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

    handleSubmit = event => {
        event.preventDefault();
        event.id = "map";
        event.isLogin = "true";
        this.props.handleClick(event);
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
                    <label>
                    Введите свой логин:
                    <input
                        name="login"
                        type="text"
                        value={login}
                        onChange={this.handleChange}
                    />
                    </label>
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
            </>

        );
    }    
}

export default Form;
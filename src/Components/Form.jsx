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
        const subEvent = event;

        // event.target.id = "map";
        subEvent.target.id = "map";
        subEvent.target.dataset.islogin = "true";

        this.props.handleClick(subEvent);
    }

    handleReg = event => {
        event.preventDefault();
        // this.setState( (state) => {state.isReg = !state.isReg}, () => {console.log("this.state.isReg=", this.state.isReg);} );
        this.setState((state) => ({ isReg: !state.isReg }),  () => {console.log("this.state.isReg=", this.state.isReg);} );
    }

    handleChange = event => {
        console.log("event.target=", event.target);
        console.log("event.target.name=", event.target.name);

        const { name } = event.target;
        this.setState( { [name]: event.target.value });
    }

/*     handleLoginChange = event => {
        this.setState( { login: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState( { password: event.target.value });
    }
    
    handleFirstNameChange = event => {
        this.setState( { firstName: event.target.value });
    }

    handleLastNameChange = event => {
        this.setState( { lastName: event.target.value });
    } */


    render() {
        const { login, password, firstName, lastName } = this.state;
        
        return (
            <>
                { this.state.isReg
                ? <a href="/reg" onClick={this.handleReg} >Зарегистрироваться</a>
                : <a href="/sign" onClick={this.handleReg} >Войти</a>
                }

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
                    { this.state.isReg 
                        ? <input type="submit" value="Войти" />
                        : <input type="submit" value="Зарегистрироваться" />
                    }                                        
                </form>
            </>

        );
    }    
}

export default Form;
import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import { Logo } from 'loft-taxi-mui-theme';
import { Grid, Button, Link, /* FormLabel, Input, */ TextField } from '@material-ui/core';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            email: "",
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
        const { login, password, email, firstName, lastName } = this.state;
        
        return (
            <div className={this.state.isReg ? "form-login" : "form-signup"}>
                <div className="form-signin-header">{this.state.isReg ? "Войти" : "Регистрация"}</div>
                <div className="form-signin-text">{this.state.isReg ? "Новый пользователь? " : "Уже зарегистрированы? "}
                    <Link href="/sign" onClick={this.handleReg} >{this.state.isReg ? "Зарегистрируйтесь" : "Войти"}</Link>
                </div>

                
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        { this.state.isReg &&
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        // id="standard-multiline-flexible"
                                        label="Имя пользователя *"
                                        multiline
                                        name="login"
                                        type="text"
                                        style={{width: "100%" }}
                                        // error
                                        // helperText="Неверный логин"
                                        // rowsMax="4"
                                        value={login}
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                {/* <FormLabel>
                                Имя пользователя *
                                <Input
                                    name="login"
                                    type="text"
                                    value={login}
                                    onChange={this.handleChange}
                                />
                                </FormLabel> */}
                            </>
                        }
                        { !this.state.isReg &&
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        // id="standard-multiline-flexible"
                                        label="Адрес электронной почты *"
                                        multiline
                                        name="email"
                                        type="email"
                                        style={{width: "100%" }}
                                        // error
                                        // helperText="Неверный логин"
                                        // rowsMax="4"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </Grid>

                                {/* <FormLabel>
                                Адрес электронной почты *
                                <Input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                </FormLabel> */}

                                <Grid container item xs={12} spacing={2}>

                                    <Grid item xs={6}>
                                        <TextField
                                            // id="standard-multiline-flexible"
                                            label="Имя *"
                                            multiline
                                            name="firstName"
                                            type="text"
                                            style={{ /* marginRight: "16px", */ width: "100%" }}
                                            // error
                                            // helperText="Неверный логин"
                                            // rowsMax="4"
                                            value={firstName}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    {/* <FormLabel>
                                    Имя *
                                    <Input
                                        name="firstName"
                                        type="text"
                                        value={firstName}
                                        onChange={this.handleChange}
                                    />
                                    </FormLabel> */}
                                    
                                    <Grid item xs={6}>
                                        <TextField
                                            // id="standard-multiline-flexible"
                                            label="Фамилия *"
                                            multiline
                                            name="lastName"
                                            type="text"
                                            style={{/* marginLeft: "16px", */ width: "100%" }}
                                            // error
                                            // helperText="Неверный логин"
                                            // rowsMax="4"
                                            value={lastName}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    {/* <FormLabel>
                                    Фамилия *
                                    <Input
                                        name="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={this.handleChange}
                                    />
                                    </FormLabel> */}
                                </Grid>
                            </>
                        }

                        <Grid item xs={12}>
                            <TextField
                                // id="standard-multiline-flexible"
                                label="Пароль *"
                                multiline
                                name="password"
                                type="password"
                                style={{width: "100%" }}
                                // error
                                // helperText="Неверный логин"
                                // rowsMax="4"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </Grid>

                        {/* <FormLabel>
                        Пароль *
                        <Input
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        </FormLabel> */}

                        <Grid container justify="flex-end" item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                { this.state.isReg ? "Войти" : "Зарегистрироваться"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>                
            </div>

        );
    }    
}

export default Form;
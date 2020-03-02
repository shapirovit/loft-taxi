import React, { /* Component, */ useState, /* useContext */ } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import { Logo } from 'loft-taxi-mui-theme';
import { Grid, Button, /* Link, */ /* FormLabel, Input, */ TextField } from '@material-ui/core';
// import { Authorization } from '../../Context/authorization';
import { Link as NavLink } from 'react-router-dom';
import contextLogin from "../../Actions";
import currentUser from "../../Actions/currentUser";
import fetchUserRequest from "../../Actions/fetchUserRequest";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.contextLogin,
        currentUser: state.currentUser,

        isFetching: state.fetchUser.isFetching,
        isFetched: state.fetchUser.isFetched,
        loginStatus: state.fetchUser.status,
        error: state.fetchUser.error,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addContextLogin: (bool) => {
            dispatch(contextLogin(bool))
        },
        addCurrentUser: (user) => {
            dispatch(currentUser(user))
        },
        addFetchUser: (user) => {
            dispatch(fetchUserRequest(user))
        }
    }
}


const Form = (props) => {
    // const [user, setUser] = useState({
    //     login: "",
    //     password: "",
    //     firstName: "",
    //     lastName: "",
    // });

    const { addContextLogin, addCurrentUser, currentUser /* , isLoggedIn */ } = props;
    const { isFetching, isFetched, loginStatus, error, addFetchUser} = props;

    // console.log("currentUser=", currentUser);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [isReg, setIsReg] = useState(props.isReg);

    // console.log("props.isReg=", props.isReg);
    
    // console.log("isReg=", isReg);

    // const [param, setParam] = useState({});

    // console.log("param=", param);
    

    // const auth = useContext(Authorization);

    const handleReg = event => {
        event.preventDefault();
        // setParam(param => {
        //     isReg = !isReg;
        //     return param;
        // });
        setIsReg(!isReg);
        // console.log("isRegAfterClick=", isReg);        
    }

    const handleChange = event => {
        // console.log("event=", event);
        const { name } = event.target;
        // console.log("name=", name);

        if (name === "login") { setLogin(event.target.value); /* console.log("login=", login); */ }
        if (name === "password") { setPassword(event.target.value); /* console.log("password=", password); */ }
        // if (name === "email") { setEmail(event.target.value); console.log("email=", email); }
        if (name === "firstName") { setFirstName(event.target.value); /* console.log("firstName=", firstName); */ }
        if (name === "lastName") { setLastName(event.target.value); /* console.log("lastName=", lastName); */ }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        
        if (isReg) {
            let userLogin = {
                email: login,
                password: password,
            }
            addFetchUser(userLogin);
        }
        console.log("loginStatus===", loginStatus);
        
        // if (loginStatus) {            
        //     addCurrentUser(user);
        //     addContextLogin(true);
        //     props.handleClick("map");
        // }

        // console.log("user=", user);
        // console.log("currentUserAfterSubmit=", currentUser);
        // auth.login(login || email, password);
        // document.location.href = "map";
        // auth.login(param.login || param.email, param.password);
    }

    // const handleChange = event => {
    //     console.log("event=", event);
    //     const { name } = event.target;
    //     console.log("name=", name);
    //     console.log("param=", param);
    //     setParam( param => {
    //         param[name] = event.target.value;
    //         return param;
    //     });
    //     console.log("paramAfterSetParam=", param);
    // }

    // const { login, password, email, firstName, lastName } = param;

    return (
        <div className={isReg ? "form-login" : "form-signup"}>
            <div className="form-header">{isReg ? "Войти" : "Регистрация"}</div>
            <div className="form-text">{isReg ? "Новый пользователь? " : "Уже зарегистрированы? "}
                {/* <Link href="/sign" onClick={handleReg} > */}
                <div className="form-link" onClick={handleReg} >
                    <NavLink to={ isReg ? "/signup" : "/login"}>
                        {isReg ? "Зарегистрируйтесь" : "Войти"}
                    </NavLink>
                </div>
                {/* </Link> */}
            </div>

            
            <form onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                    { isReg &&
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    // id="standard-multiline-flexible"
                                    label="Имя пользователя *"
                                    multiline
                                    name="login"
                                    type="email"
                                    style={{width: "100%" }}
                                    // error
                                    // helperText="Неверный логин"
                                    // rowsMax="4"
                                    value={login}
                                    onChange={handleChange}
                                />                              
                            </Grid>

                        </>
                    }
                    { !isReg &&
                        <>
                            <Grid item xs>
                                <TextField
                                    // id="standard-multiline-flexible"
                                    label="Адрес электронной почты *"
                                    multiline
                                    name="login"
                                    type="email"
                                    style={{width: "100%" }}
                                    // error
                                    // helperText="Неверный логин"
                                    // rowsMax="4"
                                    value={login}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid container item spacing={2}>
                                <Grid item xs>
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
                                        onChange={handleChange}
                                    />
                                </Grid>                                    
                                <Grid item xs>
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
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    }

                    <Grid item xs>
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
                            onChange={handleChange}
                        />
                        {isFetching && <p>Загружаем данные...</p>}
                        { (error != null) && <div>
                                                <p>Ошибка при загрузке данных:</p>
                                                <p>{error}</p>
                                            </div>
                        }
                    </Grid>
                    <Grid container justify="flex-end" item>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            { isReg ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Grid>
                </Grid>
            </form>                
        </div>

    );
}

Form.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( Form )
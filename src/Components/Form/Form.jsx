import React, { /* Component, */ useState, useContext } from 'react';
import './Form.css';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import { Logo } from 'loft-taxi-mui-theme';
import { Grid, Button, Link, /* FormLabel, Input, */ TextField } from '@material-ui/core';
import { Authorization } from '../../Context/authorization';

const Form = (props) => {
    const [param, setParam] = useState({
        login: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    });

    const [isReg, setIsReg] = useState(true);

    console.log("isReg=", isReg);

    // const [param, setParam] = useState({});

    // console.log("param=", param);
    

    const auth = useContext(Authorization);

    const handleSubmit = event => {
        event.preventDefault();
        props.handleClick("map");
        auth.login(param.login || param.email, param.password);
    }

    const handleReg = event => {
        event.preventDefault();
        // setParam(param => {
        //     isReg = !isReg;
        //     return param;
        // });
        setIsReg(!isReg, () => console.log("isRegCallBack=", isReg));
        console.log("isRegAfterClick=", isReg);
        
    }

    const handleChange = event => {
        const { name } = event.target;
        setParam( param[name] = event.target.value );
        console.log("param=", param);
    }

    const { login, password, email, firstName, lastName } = param;

    return (
        <div className={isReg ? "form-login" : "form-signup"}>
            <div className="form-header">{isReg ? "Войти" : "Регистрация"}</div>
            <div className="form-text">{isReg ? "Новый пользователь? " : "Уже зарегистрированы? "}
                <Link href="/sign" onClick={handleReg} >{isReg ? "Зарегистрируйтесь" : "Войти"}</Link>
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
                                    type="text"
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
                                    name="email"
                                    type="email"
                                    style={{width: "100%" }}
                                    // error
                                    // helperText="Неверный логин"
                                    // rowsMax="4"
                                    value={email}
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

// class Form extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             login: "",
//             password: "",
//             email: "",
//             firstName: "",
//             lastName: "",
//             isReg: false
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     static propTypes = {
//         handleClick: PropTypes.func.isRequired
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.handleClick({id: "map", isLogin: "true"});
//     }

//     handleReg = event => {
//         event.preventDefault();
//         this.setState((state) => ({ isReg: !state.isReg }),  () => {console.log("this.state.isReg=", this.state.isReg);} );
//     }

//     handleChange = event => {
//         console.log("event.target=", event.target);
//         console.log("event.target.name=", event.target.name);

//         const { name } = event.target;
//         this.setState( { [name]: event.target.value });
//     }

//     render() {
//         const { login, password, email, firstName, lastName } = this.state;
        
//         return (
//             <div className={this.state.isReg ? "form-login" : "form-signup"}>
//                 <div className="form-header">{this.state.isReg ? "Войти" : "Регистрация"}</div>
//                 <div className="form-text">{this.state.isReg ? "Новый пользователь? " : "Уже зарегистрированы? "}
//                     <Link href="/sign" onClick={this.handleReg} >{this.state.isReg ? "Зарегистрируйтесь" : "Войти"}</Link>
//                 </div>

                
//                 <form onSubmit={this.handleSubmit}>
//                     <Grid container spacing={5}>
//                         { this.state.isReg &&
//                             <>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         // id="standard-multiline-flexible"
//                                         label="Имя пользователя *"
//                                         multiline
//                                         name="login"
//                                         type="text"
//                                         style={{width: "100%" }}
//                                         // error
//                                         // helperText="Неверный логин"
//                                         // rowsMax="4"
//                                         value={login}
//                                         onChange={this.handleChange}
//                                     />
//                                 </Grid>
//                             </>
//                         }
//                         { !this.state.isReg &&
//                             <>
//                                 <Grid item xs>
//                                     <TextField
//                                         // id="standard-multiline-flexible"
//                                         label="Адрес электронной почты *"
//                                         multiline
//                                         name="email"
//                                         type="email"
//                                         style={{width: "100%" }}
//                                         // error
//                                         // helperText="Неверный логин"
//                                         // rowsMax="4"
//                                         value={email}
//                                         onChange={this.handleChange}
//                                     />
//                                 </Grid>
//                                 <Grid container item spacing={2}>
//                                     <Grid item xs>
//                                         <TextField
//                                             // id="standard-multiline-flexible"
//                                             label="Имя *"
//                                             multiline
//                                             name="firstName"
//                                             type="text"
//                                             style={{ /* marginRight: "16px", */ width: "100%" }}
//                                             // error
//                                             // helperText="Неверный логин"
//                                             // rowsMax="4"
//                                             value={firstName}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Grid>                                    
//                                     <Grid item xs>
//                                         <TextField
//                                             // id="standard-multiline-flexible"
//                                             label="Фамилия *"
//                                             multiline
//                                             name="lastName"
//                                             type="text"
//                                             style={{/* marginLeft: "16px", */ width: "100%" }}
//                                             // error
//                                             // helperText="Неверный логин"
//                                             // rowsMax="4"
//                                             value={lastName}
//                                             onChange={this.handleChange}
//                                         />
//                                     </Grid>
//                                 </Grid>
//                             </>
//                         }

//                         <Grid item xs>
//                             <TextField
//                                 // id="standard-multiline-flexible"
//                                 label="Пароль *"
//                                 multiline
//                                 name="password"
//                                 type="password"
//                                 style={{width: "100%" }}
//                                 // error
//                                 // helperText="Неверный логин"
//                                 // rowsMax="4"
//                                 value={password}
//                                 onChange={this.handleChange}
//                             />
//                         </Grid>
//                         <Grid container justify="flex-end" item>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 size="large"
//                             >
//                                 { this.state.isReg ? "Войти" : "Зарегистрироваться"}
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>                
//             </div>

//         );
//     }    
// }

export default Form;
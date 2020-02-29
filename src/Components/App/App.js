import React, { /* useContext, */ useState, /* Component */ } from 'react';
// import './App.css';
import Header from '../Header';
import Map from '../../Pages/Map';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
// import { Authorization } from '../../Context/authorization';
import { Route, Redirect, Switch } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps }  from "../../Actions/contextLogin";
import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {
//         isLoggedIn: state.contextLogin
//     }
//   }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addContextLogin: (bool) => {
//         dispatch(contextLogin(bool))
//         }
//     }
// }

const App = (props) => {
    const [activePage, setActivePage] = useState("login");
    const { addContextLogin, isLoggedIn } = props;
    const handleClick = (Page) => {
        setActivePage(Page);
        if (Page === "login") {
            addContextLogin(false);
        }
    }

    return (
        <>
            {console.log("isLoggedIn=", isLoggedIn)}
            { isLoggedIn && <Header activePage={activePage} handleClick={handleClick} />}
            <Switch>
                <Route path="/map" render={ () => isLoggedIn ? <Map /> : <Redirect to="/login" />} />
                <Route path="/profile" render={ () => isLoggedIn ? <Profile /> : <Redirect to="/login" />} />
                <Route path="/login" render={() => isLoggedIn ? <Redirect to="/map" /> : <Login handleClick={handleClick} isReg={true} />  } />
                <Route path="/signup" render={() => isLoggedIn ? <Redirect to="/map" /> : <Login handleClick={handleClick} isReg={false} />  } />
                <Redirect exact from="/" to={ isLoggedIn ? "/map" : "/login"} />
                <Route render={() => <div>Ошибка 404. Страницы, которую вы ввели, не существует!</div> } /> />
            </Switch>
        </>
    );    
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( App )
import React, { /* useContext, */ useState, /* Component */ } from 'react';
// import './App.css';
import Header from '../Header';
import Map from '../../Pages/Map';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
// import { Authorization } from '../../Context/authorization';
import { Route, Redirect, Switch } from 'react-router-dom';
import statusLogin from "../../Actions/statusLogin";
import fetchUserSuccess from "../../Actions/fetchUserSuccess";
import currentUser from "../../Actions/currentUser";
import fetchUserOut from "../../Actions/fetchUserOut"
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.statusLogin.status
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addStatusLogin: (obj) => {
            dispatch(statusLogin(obj))
        },
        outFetchStatus: (obj) => {
            dispatch(fetchUserSuccess(obj));
        },
        outCurrentUser: (user) => {
            dispatch(currentUser(user))
        },
        outStatusUser: () => {
            dispatch(fetchUserOut())
        },
    }
}

const App = (props) => {
    const [activePage, setActivePage] = useState("login");
    const { addStatusLogin, outCurrentUser, outStatusUser, isLoggedIn } = props;
    const handleClick = (Page) => {
        setActivePage(Page);
        if (Page === "login") {
            addStatusLogin({status: false});
            fetchUserSuccess({});
            outCurrentUser("");
            outStatusUser();
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
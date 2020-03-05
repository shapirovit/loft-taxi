import React, { /* useContext, */ useState, /* Component */ } from 'react';
// import './App.css';
import Header from '../Header';
import Map from '../../Pages/Map';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
// import { Authorization } from '../../Context/authorization';
import { Route, Redirect, Switch } from 'react-router-dom';
import statusLogin from "../../Actions/statusLogin";
import statusCard from "../../Actions/statusCard";
import fetchUserSuccess from "../../Actions/fetchUserSuccess";
import currentUser from "../../Actions/currentUser";
import fetchUserOut from "../../Actions/fetchUserOut"
import { fetchCardOut } from "../../Actions/fetchCard"
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
        addStatusCard: (obj) => {
            dispatch(statusCard(obj))
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
        outStatusCard: () => {
            dispatch(fetchCardOut())
        },
    }
}

const App = (props) => {
    const [activePage, setActivePage] = useState("login");
    const { addStatusLogin, addStatusCard, outCurrentUser, outStatusUser, outStatusCard, isLoggedIn } = props;
    const handleClick = (Page) => {
        setActivePage(Page);
        if (Page === "login") {
            addStatusLogin({status: false});
            addStatusCard({status: false});
            fetchUserSuccess({});
            outCurrentUser("");
            outStatusUser();
            outStatusCard();
            localStorage["statusLogin"] = JSON.stringify({ status: false });
            localStorage["statusCard"] = JSON.stringify({ status: false });
        }
    }

    return (
        <>
            {console.log("isLoggedIn=", isLoggedIn)}
            { isLoggedIn && <Header activePage={activePage} handleClick={handleClick} />}
            <Switch>
                <Route path="/map" render={ () => isLoggedIn ? <Map handleClick={handleClick} /> : <Redirect to="/login" />} />
                <Route path="/profile" render={ () => isLoggedIn ? <Profile handleClick={handleClick} /> : <Redirect to="/login" />} />
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
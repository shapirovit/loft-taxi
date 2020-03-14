import React, { /* useContext, */ useState, /* Component */ } from 'react';
// import './App.css';
import Header from '../Header';
import Map from '../../Pages/Map';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
// import { Authorization } from '../../Context/authorization';
import { Route, Redirect, Switch } from 'react-router-dom';
import { statusLogin } from "../../moduls/statusLogin";
import { statusCard } from "../../moduls/statusCard";
import { fetchUserSuccess } from "../../moduls/fetchUser";
import { currentUser } from "../../moduls/currentUser";
import { fetchUserOut } from "../../moduls/fetchUser"
import { fetchCardOut } from "../../moduls/fetchCard"
import { connect } from 'react-redux';
import { getStatusLoginStatus } from '../../moduls/statusLogin';
import { statusOrder } from '../../moduls/statusOrder';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: getStatusLoginStatus(state),
        State: state
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
        addStatusOrder: (obj) => {
            dispatch(statusOrder(obj))
        },
    }
}

const App = (props) => {
    const [activePage, setActivePage] = useState("login");
    const { addStatusLogin, addStatusCard, addStatusOrder, outCurrentUser, outStatusUser, outStatusCard, isLoggedIn, State } = props;

    console.log("State=", State);

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
            addStatusOrder({status: false})
            localStorage["statusOrder"] = JSON.stringify({ status: false });
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
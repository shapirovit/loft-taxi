import React from 'react';
// import './App.css';
import Header from '../Header/index';
import Map from '../../Pages/Map.jsx';
import Profile from '../../Pages/Profile.jsx';
import Login from '../../Pages/Login.jsx';
const {Component} = React;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin: "false",
          activePage: "login"
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = event => {
        event.preventDefault();
        console.log("event.target=", event.target);
        console.log("event.target.dataset.islogin=", event.target.dataset.islogin);
        console.log("event.isLogin=", event.isLogin);
        console.log("this.state.isLogin=", this.state.isLogin);
        

        const isLogin = ( event.target.dataset.islogin || event.isLogin);
        console.log("isLogin=", isLogin);
        
        (isLogin !== this.state.isLogin) && this.setState( {isLogin: isLogin}, () => {
          console.log("this.state.isLoginCallback=", this.state.isLogin);
        } );
        
        const setId = (event.target.id || event.id);
        console.log("setId=", setId);

        (setId !== this.state.activePage) && this.setState( {activePage: setId}, () => {
          console.log("this.state.activePageCallback=", this.state.activePage);
        } );
        console.log("this.state.activePageAfter=", this.state.activePage);
        console.log("this.state.isLoginAfter=", this.state.isLogin);

    }

    render() {

        const pages = {
          map: <Map />,
          profile: <Profile />,
          login: <Login handleClick={this.handleClick} />
        };

        console.log("this.state.activePageRenderApp", this.state.activePage);
        

        return (
            <>
                { this.state.activePage !== "login" && <Header islogin={this.state.isLogin} activePage={this.state.activePage} handleClick={this.handleClick} />}
                {pages[this.state.activePage]}
                
            </>
          );
    }
 
}

export default App;

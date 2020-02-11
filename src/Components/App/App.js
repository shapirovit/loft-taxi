import React from 'react';
// import './App.css';
import Header from '../Header';
import Map from '../../Pages/Map';
import Profile from '../../Pages/Profile';
import Login from '../../Pages/Login';
const {Component} = React;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: "true",
            activePage: "profile"
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = event => {
        if (!event.id) {
            event.preventDefault();
        }
        

        const isLogin = ( event.isLogin || event.target.dataset.islogin);
        console.log("isLogin=", isLogin);
        
        (isLogin !== this.state.isLogin) && this.setState( {isLogin: isLogin}, () => {
            console.log("this.state.isLoginCallback=", this.state.isLogin);
        } );
        
        const setId = (event.id || event.target.id);
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

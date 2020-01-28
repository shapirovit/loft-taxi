import React from 'react';
// import './App.css';
import Header from './Components/Header.jsx';
import Map from './Pages/Map.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Pages/Login.jsx';
const {Component} = React;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLogin: "true",
          setPage: "profile"
        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = event => {
        event.preventDefault();
        console.log("event.target=", event.target);
        console.log("event.target.dataset.islogin=", event.target.dataset.islogin);
        console.log("this.state.isLogin=", this.state.isLogin);

        (event.target.dataset.islogin !== this.state.isLogin) && this.setState( {isLogin: event.target.dataset.islogin}, () => {
          console.log("this.state.isLoginCallback=", this.state.isLogin);
        } );
        
        (event.target.id !== this.state.setPage) && this.setState( {setPage: event.target.id}, () => {
          console.log("this.state.setPageCallback=", this.state.setPage);
        } );
        console.log("this.state.setPageAfter=", this.state.setPage);
        console.log("this.state.isLoginAfter=", this.state.isLogin);

    }

    render() {

        const pages = {
          map: () => <Map />,
          profile: () => <Profile />,
          login: () => <Login handleClick={this.handleClick} />
        };

        return (
            <>
                <Header islogin={this.state.isLogin} setPage={this.state.setPage} handleClick={this.handleClick} />
                {pages[this.state.setPage]()}
                
            </>
          );
    }
 
}

export default App;

import React /* , { useContext } */ from 'react';
import LinkHeader from '../LinkHeader';
import links from './links';
import PropTypes from 'prop-types';
import './Header.css';
import { Logo } from 'loft-taxi-mui-theme';
// import { Authorization } from '../../Context/authorization';
import statusLogin from "../../moduls/statusLogin";
import { connect } from 'react-redux';
import { getStatusLoginStatus } from '../../moduls/statusLogin';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: getStatusLoginStatus(state),
        State: state
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addStatusLogin: (bool) => {
        dispatch(statusLogin(bool))
        }
    }
}

const Header = props => {

    const { /* addStatusLogin, */ isLoggedIn, State } = props;

    console.log("State in Header=", State);
    

    // const auth = useContext(Authorization);

/*     const handleClick = event => {
        event.preventDefault();
        const activePage = event.target.id;
        const islogin = event.target.dataset.islogin;
        if (activePage === "login") {
            auth.logout();
        }
        props.handleClick({isLogin: {islogin}, activePage: {activePage} });
    } */

    if (isLoggedIn) {
        return (        
            <div className="header">
                <div className="header-center">
                    <Logo />
                    <div className="header-menu">
                        {links.map( link =>
                            <LinkHeader
                            hrefPage={`/${link.id}`} /* {props.hrefPage || ""} */
                            page={link.link}
                            activePage={props.activePage}
                            handleClick={props.handleClick}
                            key={link.id}
                            id={link.id}
                            />)}
                    </div>
                </div>
            </div>
        )
    }

    // return <h1>Вы вышли из своего аккаунта!</h1>
    return null;
}

Header.propTypes = {
    activePage: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

// Header.defaultProps = {
//     // activePage: "map"
//     // handleClick: PropTypes.func.isRequired
// }

// export default Header;

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )( Header )
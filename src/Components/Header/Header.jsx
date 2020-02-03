import React from 'react';
import LinkHeader from '../LinkHeader';
import links from './links';
import PropTypes from 'prop-types';

const Header = props => {
    if (props.islogin === "true") {
        return (        
            <>        
                {links.map( link =>
                    <LinkHeader
                    hrefPage={props.hrefPage || ""}
                    page={link.link}
                    activePage={props.activePage}
                    handleClick={props.handleClick}
                    key={link.id}
                    id={link.id}
                    islogin={link.islogin}
                    />)}
            </>
        )
    }

    // return <h1>Вы вышли из своего аккаунта!</h1>
    return null;
}

Header.propTypes = {
    islogin: PropTypes.string.isRequired,
    activePage: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

Header.defaultProps = {
    islogin: "true",
    activePage: "map"
    // handleClick: PropTypes.func.isRequired
}

export default Header;
import React from 'react';
import LinkHeader from '../LinkHeader/index';
import links from './links';

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

export default Header;
import React from 'react';
import LinkHeader from './LinkHeader.jsx';
import links from './links';

const Header = props => {
    if (props.islogin === "true") {
        return (        
            <>        
                {links.map( link =>
                    <LinkHeader
                    hrefPage={props.hrefPage || ""}
                    page={link.link}
                    setPage={props.setPage}
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
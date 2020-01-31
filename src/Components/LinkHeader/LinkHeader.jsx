import React from 'react';
import './LinkHeader.css';

const LinkHeader = props => {

    return (
        <>
            {<a
            href={props.hrefPage || ""}
            // page={props.page}
            id={props.id}
            onClick={props.handleClick}
            data-islogin={props.islogin}
            className={props.id === props.activePage ? "HeaderLink activeLink" : "HeaderLink"} >
                {props.page}
            </a>}
        </>
    )
}

export default LinkHeader;
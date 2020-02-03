import React from 'react';
import './LinkHeader.css';
import PropTypes from 'prop-types';

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

LinkHeader.propTypes = {
    id: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    islogin: PropTypes.string.isRequired,
    activePage: PropTypes.string.isRequired,
    page: PropTypes.string
}

LinkHeader.defaultProps = {
    // id: ,
    // handleClick: PropTypes.func.isRequired,
    islogin: "true",
    activePage: "map"
    // page: PropTypes.string
}


export default LinkHeader;
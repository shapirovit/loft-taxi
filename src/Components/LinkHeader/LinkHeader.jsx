import React from 'react';
import './LinkHeader.css';
import PropTypes from 'prop-types';
// import { Button } from '@material-ui/core';

const LinkHeader = props => {

    const handleClick = event => {
        event.preventDefault();
        const { id } = event.target;
        props.handleClick(id);
    }

    return (
        <>
            {<a
            href={props.hrefPage || ""}
            page={props.page}
            id={props.id}
            onClick={handleClick}
            className={props.id === props.activePage ? "HeaderLink activeLink" : "HeaderLink"}
            >
                {props.page}
            </a>}
        </>
    )
}

LinkHeader.propTypes = {
    hrefPage: PropTypes.string,
    page: PropTypes.string.isRequired,
    activePage: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired

}

LinkHeader.defaultProps = {
    hrefPage: "",
    activePage: "map"    
}


export default LinkHeader;
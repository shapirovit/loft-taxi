import React from 'react';
import './LinkHeader.css';
import PropTypes from 'prop-types';
// import { Button } from '@material-ui/core';
import {Link } from 'react-router-dom';

const LinkHeader = props => {

    const handleClick = event => {
        event.preventDefault();
        const { id } = event.target;
        props.handleClick(id);
    }

    return (
        <>
            {
                <div onClick={handleClick} className="HeaderLinkWrap" >
                    <Link
                    to={props.hrefPage} 
                    className={props.id === props.activePage ? "HeaderLink activeLink" : "HeaderLink"}
                    id={props.id}
                    page={props.page}
                    >
                    
                        {/* <a
                        href={props.hrefPage || ""}
                        page={props.page}
                        id={props.id}
                        onClick={handleClick}
                        className={props.id === props.activePage ? "HeaderLink activeLink" : "HeaderLink"}
                        >
                            <Link to={props.hrefPage}>
                                {props.page}
                            </Link>
                        </a> */}
                        {props.page}
                    </Link>
                </div>
            }
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
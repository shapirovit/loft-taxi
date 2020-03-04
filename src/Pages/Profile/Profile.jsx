import React, { useEffect } from 'react';
import './Profile.css';
import FormCard from '../../Components/FormCard'

const Profile = (props) => {

    useEffect(() => {
        props.handleClick("profile");
    });    

    return (
        <div className="profile-page">
            <FormCard handleClick={props.handleClick}/>
        </div>
    )
}

export default Profile;
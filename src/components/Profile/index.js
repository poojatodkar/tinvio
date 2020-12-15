import React, { Component } from 'react';
import './index.css';
import notifications from './assets/notifications.svg';
import messenger from './assets/messenger.svg';
import userProfile from './assets/user-profile.svg';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <h2 className="flex">
                    <p><img src={notifications} alt="notifications" /></p>
                    <p>Matt Thompson</p>
                </h2>
                <div className="description">
                    <p className="flex">
                        <span><img src={messenger} alt="messenger" /></span>
                        <span>...</span>
                    </p>
                    <p className="profile-img"><img src={userProfile} alt="user-profile" /></p>
                    <p className="title">Kirsten Mckellar</p>
                    <p>Cape Town, RSA</p>
                    <ul>
                        <li className="flex"><span>Nickname:</span><span>Killa Kella</span></li>
                        <li className="flex"><span>Tel:</span><span>072 143 9920</span></li>
                        <li className="flex"><span>Date Of Birth:</span><span>July 12, 1988</span></li>
                        <li className="flex"><span>Gender:</span><span>Female</span></li>
                        <li className="flex"><span>Gender:</span><span>English</span></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Profile;
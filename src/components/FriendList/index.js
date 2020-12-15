import React, { Component } from 'react';
import './index.css';
import profile from './assets/profile.png';

class FriendList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friendList: [{
                "id": 1,
                "src": profile,
                "name": "Matt Thompson",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }, {
                "id": 2,
                "src": profile,
                "name": "Claire Sharwood",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }, {
                "id": 3,
                "src": profile,
                "name": "Kirsten Mckellar",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }, {
                "id": 4,
                "src": profile,
                "name": "Shaun Gardner",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }, {
                "id": 5,
                "src": profile,
                "name": "Mace Windu",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }, {
                "id": 6,
                "src": profile,
                "name": "Kayne West",
                "description": "Lorem ipsum lorem ipsum lorem",
                "time": "30 mins"
            }]
        }
    }

    render() {
        return (
            <div className="friend-list">
                <div className="input-field">
                    <input type="text" placeholder="Search" />
                </div>
                <ul>
                    {
                        this.state.friendList.map(friend => {
                            return (
                                <li key={friend.id} className="flex">
                                    <img src={friend.src} alt="profile-img" />
                                    <div className="description">
                                        <p>{friend.name}</p>
                                        <p>{friend.description}</p>
                                    </div>
                                    <div>
                                        <p>...</p>
                                        <p>{friend.time}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
};

export default FriendList;
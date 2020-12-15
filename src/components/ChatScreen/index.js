import React, { Component } from 'react';
import './index.css';
import profile from './assets/profile.png';
import call from './assets/call.svg';
import favorite from './assets/favorite.svg';
import videoCall from './assets/video-call.svg';

class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [{
                id: 1,
                is_sender: false,
                msg: "lorem ispsum lorem ipsum lorem ipsum",
                src: profile
            }, {
                id: 2,
                is_sender: true,
                msg: "lorem ispsum lorem ipsum lorem ipsum lorem ispsum lorem ipsum lorem ipsum lorem ispsum lorem ipsum lorem ipsum lorem ispsum lorem ipsum lorem ipsum",
                src: profile
            }, {
                id: 1,
                is_sender: false,
                msg: "lorem ispsum lorem ipsum lorem ipsum",
                src: profile
            }, {
                id: 1,
                is_sender: false,
                msg: "lorem ispsum lorem ipsum lorem ipsum",
                src: profile
            }, {
                id: 1,
                is_sender: true,
                msg: "lorem ispsum lorem ipsum lorem ipsum",
                src: profile
            }]
        };
    }

    render() {
        const getStyles = value => {
            return {
                justifyContent: value.is_sender ? "flex-end" : "flex-start"
            };
        }

        return (
            <div className="chat-screen">
                <div className="header flex">
                    <h2>Kirsten Mckellar is typing... </h2>
                    <ul className="flex">
                        <li><img src={favorite} alt="icon" /></li>
                        <li><img src={call} alt="icon" /></li>
                        <li><img src={videoCall} alt="icon" /></li>
                    </ul>
                </div>
                <ul className="messages">
                    {
                        this.state.messages.map(value => {
                            return (
                                <li style={getStyles(value)}>
                                    <img src={value.src} alt="profile-img" />
                                    <span style={value.is_sender ? {background: '#0084FF', color: '#fff' } : {background: '#fff', color: '#000'}}>{value.msg}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="reply">
                    <input type="text" placeholder="Type your message ..." />
                    <div className="buttons">
                        <button className="emoji"></button>
                        <button className="send"></button>
                    </div>
                </div>
            </div>
        );
    }
};

export default ChatScreen;
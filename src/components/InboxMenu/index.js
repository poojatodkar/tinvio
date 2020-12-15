import React, { Component } from 'react';
import './index.css';
import contactBtn from './assets/add-contact.png';

class InboxMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryItems: [{
                "id": 1,
                "name": "All Messages",
                "count": "21"
            }, {
                "id": 2,
                "name": "Unread",
                "count": "99"
            }, {
                "id": 3,
                "name": "Important",
                "count": "6"
            }, {
                "id": 4,
                "name": "Drafts",
                "count": "97"
            }],
            socialItems: [{
                "id": 1,
                "name": "Teams",
                "count": "4"
            }, {
                "id": 2,
                "name": "Groups",
                "count": "3"
            }, {
                "id": 3,
                "name": "Channels",
                "count": "18"
            }, {
                "id": 4,
                "name": "Locations",
                "count": ""
            }, {
                "id": 5,
                "name": "Media",
                "count": "120"
            }],
            settingItems: [{
                "id": 1,
                "name": "Help",
            }, {
                "id": 2,
                "name": "Settings",
            }]
        }
    }

    render() {
        return (
            <div className="inbox-menu">
                <h2>Inbox <span><img src={contactBtn} alt="add-contact" /></span></h2>
                <ul>
                    {this.state.primaryItems.map(item => {
                        return <li key={item.id}>{item.name}<span>{item.count}</span></li>
                    })}
                </ul>
                <ul>
                    {this.state.socialItems.map(item => {
                        return <li key={item.id}>{item.name}<span>{item.count}</span></li>
                    })}
                </ul>
                <ul>
                    {this.state.settingItems.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        );
    }
};

export default InboxMenu;
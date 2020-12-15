import React, { Component } from 'react';
import './index.css';
import hamburger from './assets/hamburger.svg';
import fb from './assets/FB.svg';
import N from './assets/N.svg';
import S from './assets/S.svg';
import V from './assets/V.svg';
import W from './assets/W.svg';

class MenuList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: [{
                "id": 1,
                "src": hamburger,
                "alt": "Hamburger"
            }, {
                "id": 2,
                "src": W,
                "alt": "WhatsApp"
            }, {
                "id": 3,
                "src": fb,
                "alt": "FB"
            }, {
                "id": 4,
                "src": V,
                "alt": "V"
            }, {
                "id": 5,
                "src": S,
                "alt": "Skype"
            }, {
                "id": 6,
                "src": N,
                "alt": "N"
            }]
        }
    }
    
    render() {
        return (
            <ul className="menu-list">
                {this.state.menuList.map(menu => {
                    return <li key={menu.id}><img src={menu.src} alt={menu.alt} /></li>
                })}
            </ul>
        );
    }
};

export default MenuList;
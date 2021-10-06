import React, {Component} from 'react';
import starlink_Logo  from '../assets/images/starlink_logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={starlink_Logo} className="App-logo" alt="logo" />
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}

export default Header;

import React, {Component} from 'react';
import logo from '../../image/logo.svg';
import './Header.css';


class Header extends Component {


    render() {
        return (
            <header>
                <h2>Coctail DB</h2>
                <img src={logo} alt=""/>
            </header>
        )
    }
}

export default Header;


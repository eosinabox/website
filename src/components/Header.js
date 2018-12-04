import React from 'react'

// import logo from '../assets/images/logo.svg';
import logo from '../assets/images/website-icon.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>EOS in a box</h1>
        <p>Your servers, your blockchain<br />
        based on <a href="https://eos.io/">EOSIO</a>.</p>
    </header>
)

export default Header

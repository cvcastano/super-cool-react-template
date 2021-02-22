import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.svg';

function Header() {
    return (
<>
<header>
<h1>Super Cool Website</h1>
<span className="tagline">is super cool!</span>
</header>
<div className="stripe">
<img src={logo} className="App-logo" alt="logo" />
<img src={logo} className="App-logo" alt="logo" />
<img src={logo} className="App-logo" alt="logo" />
</div>
</>
    )
}

export default Header;

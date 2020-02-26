import React from 'react';

import Icon from 'components/UI/Icon';

import './style.css';

export default function Navbar() {
    return <nav>
        <div className="nav-wrapper" id="navbar">
            <a ><Icon>menu</Icon></a>
        </div>
    </nav>;    
}
import React from 'react';

import Navbar from 'components/Navbar';

import './style.css';

export default function DefaultLayout({ children }) {
    return <div id="layout">
        <Navbar />
        {children}
    </div>;
}
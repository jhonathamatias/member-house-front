import React from 'react';

import './style.css';

export default function DefaultLayout({ children }) {
    return <div id="layout">
        {children}
    </div>;
}
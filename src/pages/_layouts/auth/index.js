import React from 'react';

import './style.css';

export default function AuthLayout({ children }) {
    return <div id="app-auth">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    </div>;
}
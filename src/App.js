import React from 'react';
import { Router } from "react-router-dom";

import { Provider } from 'react-redux';
import Routes from './routes';
import history from './services/history';
import store from './store';

function App() {
    return (
        <div id="app">
            <Provider store={store}>
                <Router history={history}>
                    <Routes />
                </Router>
            </Provider>
        </div>
    );
}

export default App;


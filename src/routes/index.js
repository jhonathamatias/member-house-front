import React, { lazy, Suspense } from 'react';

import { Switch } from 'react-router-dom';
import Route from './Routes';

const SignIn = lazy(() => import('../pages/SignIn'));
const Forget = lazy(() => import('../pages/Forget'));
const Home = lazy(() => import('../pages/Home'));

export default function Routes() {
    return <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/" exact component={() => <SignIn />} />
            <Route path="/forget" component={() => <Forget />} />
            <Route path="/home" component={Home} isPrivate />

            {/* <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route component={PageNotFound} /> */}
        </Switch>
    </Suspense>;
}
import * as React from 'react';
import {Route, Switch} from 'react-router';
import Layout from './views/layouts/Layout';
import LayoutAuthed from "./views/layouts/LayoutAuthed";
import Login from './views/Login';
import ProtectedViews from './views/authed';

import './custom.css'
import Session from "./utils/Session";

export default () => {
    const session = new Session();

    return session.loggedIn() !== true
        ? (
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Login} />
                    </Switch>
                </Layout>
            )
        : (
                <LayoutAuthed>
                    <Switch>
                        <ProtectedViews />
                    </Switch>
                </LayoutAuthed>
            )
};

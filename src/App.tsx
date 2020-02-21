import * as React from 'react';
import {Route, Switch} from 'react-router';
import Layout from './views/layouts/Layout';
import LayoutAuthed from "./views/layouts/LayoutAuthed";
import Login from './views/Login';
import ProtectedViews from './views/authed';

import 'react-notifications-component/dist/theme.css';
import './custom.css';
import Session from "./utils/Session";
import Notification from "./views/components/Notification";

export default () => {
    const session = new Session();

    return (
        <Notification>
            {
                session.loggedIn() === true
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
            }
        </Notification>
    )
};

import * as React from 'react';
import {Route, Switch} from 'react-router';
import ProtectedViews from './components/routes/authed';
import UnProtectedViews from './components/routes/unauthed';
import 'react-notifications-component/dist/theme.css';
import './style.css';
import Notification from "./components/views/Notification";

export default () => (
        <Notification>
            <Switch>
                <Route
                    path="/"
                    render={(props) => <UnProtectedViews />}
                />
                <Route
                    path="/app"
                    render={(props) => <ProtectedViews />}
                />
            </Switch>
        </Notification>
    );

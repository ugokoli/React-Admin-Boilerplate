import * as React from 'react';
import {Route, Switch} from "react-router";
import Login from '../pages/site/Login';
import CenteredLayout from "../layouts/CenteredLayout";

const SitePages = () => (
    <CenteredLayout>
        <Switch>
            <Route exact path='/' component={Login} />
        </Switch>
    </CenteredLayout>
);

export default SitePages;

import * as React from 'react';
import {Route, Switch} from "react-router";
import PortalLayout from "../layouts/PortalLayout";
import {getRoutesWithComponent} from "../../utils/Route";
import portalRoutes from "../pages/portal";

export default () => (
    <PortalLayout>
        <Switch>
            {
                getRoutesWithComponent(portalRoutes()).map(route => {
                    console.log("Component routes:", route);
                    return (
                        <Route exact path={route.path} component={route.component} />
                    )
                })
            }
        </Switch>
    </PortalLayout>
);

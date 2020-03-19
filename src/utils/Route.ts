import React from "react";
import {AdminRoles} from "../store/reducers/Account.reducer";
import {RouteComponentProps, StaticContext} from "react-router";

export interface Route {
    name: string;
    icon?: string;
    auth?: AdminRoles;
    path?: string;
    component?:
        React.FunctionComponent<any> |
        React.ComponentClass<any, any> |
        React.ComponentClass<RouteComponentProps<any, StaticContext, any>, any> |
        React.FunctionComponent<RouteComponentProps<any, StaticContext, any>> |
        undefined;
    children?: Route[];
}

export const getRoutesWithComponent = (routes: Route[]): Route[] => {
    let allRoutes: Route[] = [];
    routes.map(route => {
        if(route.path && route.component) {
            allRoutes.push(route);
        }
        if(route.children) {
            allRoutes.push(...getRoutesWithComponent(route.children));
        }
    });

    return allRoutes;
};

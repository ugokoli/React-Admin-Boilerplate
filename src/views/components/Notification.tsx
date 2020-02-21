import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../components/NavMenu';
import ReactNotification from 'react-notifications-component';
import {connect} from "react-redux";
import {ApplicationState} from "../../store/reducers";
import {appActionCreators} from "../../store/actions";
import {NotificationState} from "../../store/reducers/Notification.reducer";
import {RouteComponentProps} from "react-router";

type NotificationProps =
    React.ReactNode &
    NotificationState &
    typeof appActionCreators &
    RouteComponentProps<{}>;

const Notification: React.FC<NotificationProps> = props => {
    return (
        <React.Fragment>
            <ReactNotification />
            {props.children}
        </React.Fragment>
    )
};

export default connect(
    (state: ApplicationState) => state.notification,
    appActionCreators
)(Notification as any)
import React, {useEffect} from 'react';
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
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
    useEffect(() => {
        if(props.logs.length > 0) {
            const notification = props.logs[-1];

            store.addNotification({
                title: notification.title,
                message: notification.message,
                type: notification.type,
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 10000,
                    onScreen: true
                }
            });
        }
    }, [props.logs.length]);

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
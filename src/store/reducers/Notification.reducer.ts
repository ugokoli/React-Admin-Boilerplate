import { Action, Reducer } from 'redux';
import {NOTIFICATION_SHOW, Notification, KnownAction} from "../actions/Notification.action";

export interface NotificationState {
    logs: Notification[];
}

export const reducer: Reducer<NotificationState> = (state: NotificationState | undefined, incomingAction: Action): NotificationState => {
    if (state === undefined) {
        return { logs: [] };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case NOTIFICATION_SHOW:
            state.logs.push(action.notification);
            return { logs: state.logs };
        default:
            return state;
    }
};

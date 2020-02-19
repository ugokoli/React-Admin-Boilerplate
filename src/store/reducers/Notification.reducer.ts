import { Action, Reducer } from 'redux';
import {NOTIFICATION_SHOW, KnownAction} from "../actions/Notification.action";

export interface NotificationState {
    count: number;
}

export const reducer: Reducer<NotificationState> = (state: NotificationState | undefined, incomingAction: Action): NotificationState => {
    if (state === undefined) {
        return { count: 0 };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case NOTIFICATION_SHOW:
            return { count: state.count + 1 };
        default:
            return state;
    }
};

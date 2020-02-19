export const NOTIFICATION_SHOW = '[NOTIFICATION] SHOW';

export enum NotificationView {
    Success,
    Info,
    Warning,
    Error,
}

export interface showNotificationAction { type: string, view: NotificationView, message: string }

export type KnownAction = showNotificationAction;

export const actionCreators = {
    showNotification: (view: NotificationView, message: string) => ({ type: NOTIFICATION_SHOW, view, message } as showNotificationAction),
};

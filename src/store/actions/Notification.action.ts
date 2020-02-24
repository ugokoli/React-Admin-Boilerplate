export const NOTIFICATION_SHOW = '[NOTIFICATION] SHOW';

export enum NotificationView {
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "danger",
}

export interface Notification {
    type: NotificationView;
    title?: string;
    message: string;
}

export interface showNotificationAction { type: string, notification: Notification }

export type KnownAction = showNotificationAction;

export const actionCreators = {
    showNotification: (notification: Notification) => ({ type: NOTIFICATION_SHOW, notification } as showNotificationAction),
};

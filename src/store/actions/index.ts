import {actionCreators as account} from "./Account.action";
import {actionCreators as notification} from "./Notification.action";
import {actionCreators as counter} from "./Counter.action";
import {actionCreators as weather} from "./WeatherForecasts.action";

export const appActionCreators = {
    ...account,
    ...notification,
    ...counter,
    ...weather
};

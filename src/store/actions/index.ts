import {actionCreators as counter} from "./Counter.action";
import {actionCreators as weather} from "./WeatherForecasts.action";

export const appActionCreators = {
    ...counter,
    ...weather
};

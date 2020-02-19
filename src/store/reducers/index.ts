import * as Account from "./Account.reducer";
import * as Notification from "./Notification.reducer";
import * as Counter from "./Counter.reducer";
import * as WeatherForecasts from "./WeatherForecasts.reducer";

// The top-level state object
export interface ApplicationState {
    account: Account.AccountState | undefined;
    notification: Notification.NotificationState | undefined;
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
}

export const applicationReducers = {
    account: Account.reducer,
    notification: Notification.reducer,
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};

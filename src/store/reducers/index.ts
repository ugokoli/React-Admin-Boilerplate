import * as Counter from "./Counter.reducer";
import * as WeatherForecasts from "./WeatherForecasts.reducer";

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
}

export const applicationReducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};

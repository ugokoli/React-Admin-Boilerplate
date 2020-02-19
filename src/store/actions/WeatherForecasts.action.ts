import { AppThunkAction } from '../';

export const REQUEST_WEATHER_FORECASTS = '[WEATHER] REQUEST_WEATHER_FORECASTS';
export const RECEIVE_WEATHER_FORECASTS = '[WEATHER] RECEIVE_WEATHER_FORECASTS';

export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface RequestWeatherForecastsAction {
    type: string;
    startDateIndex: number;
}

interface ReceiveWeatherForecastsAction {
    type: string;
    startDateIndex: number;
    forecasts: WeatherForecast[];
}

export type KnownAction = RequestWeatherForecastsAction | ReceiveWeatherForecastsAction;

export const actionCreators = {
    requestWeatherForecasts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.weatherForecasts && startDateIndex !== appState.weatherForecasts.startDateIndex) {
            fetch(`weatherforecast`)
                .then(response => response.json() as Promise<WeatherForecast[]>)
                .then(data => {
                    dispatch({ type: RECEIVE_WEATHER_FORECASTS, startDateIndex: startDateIndex, forecasts: data });
                });

            dispatch({ type: REQUEST_WEATHER_FORECASTS, startDateIndex: startDateIndex });
        }
    }
};

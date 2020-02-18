import { Action, Reducer } from 'redux';
import {
    KnownAction,
    RECEIVE_WEATHER_FORECASTS,
    REQUEST_WEATHER_FORECASTS,
    WeatherForecast
} from "../actions/WeatherForecasts.action";


export interface WeatherForecastsState {
    isLoading: boolean;
    startDateIndex?: number;
    forecasts: WeatherForecast[];
}

const unloadedState: WeatherForecastsState = { forecasts: [], isLoading: false };

export const reducer: Reducer<WeatherForecastsState> = (state: WeatherForecastsState | undefined, incomingAction: Action): WeatherForecastsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case REQUEST_WEATHER_FORECASTS:
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case RECEIVE_WEATHER_FORECASTS:
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: [], //action.forecasts,
                    isLoading: false
                };
            }
            break;
    }

    return state;
};

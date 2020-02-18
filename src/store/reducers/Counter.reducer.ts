import { Action, Reducer } from 'redux';
import {DECREMENT_COUNT, INCREMENT_COUNT, KnownAction} from "../actions/Counter.action";

export interface CounterState {
    count: number;
}

export const reducer: Reducer<CounterState> = (state: CounterState | undefined, incomingAction: Action): CounterState => {
    if (state === undefined) {
        return { count: 0 };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case INCREMENT_COUNT:
            return { count: state.count + 1 };
        case DECREMENT_COUNT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

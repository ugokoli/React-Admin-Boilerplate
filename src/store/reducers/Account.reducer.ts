import { Action, Reducer } from 'redux';
import {
    AccountAction,
    LOGIN_SUCCESS,
} from "../actions/Account.action";


export interface AccountState {
    jwt?: string;
}

const initialState: AccountState = { };

export const reducer: Reducer<AccountState> = (state: AccountState = initialState, incomingAction: Action): AccountState => {
    const action = incomingAction as AccountAction;

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                jwt: action.token
            };
        default:
            return state;
    }
};

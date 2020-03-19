import { Action, Reducer } from 'redux';
import {
    AccountAction,
    LOGIN_SUCCESS,
} from "../actions/Account.action";

export enum AdminRoles {
    SuperAdmin = "super-admin",
    BranchAdmin = "branch-admin",
}

export interface AccountState {
    jwt?: string;
    isLoggedIn: boolean;
    role?: AdminRoles;
}

const initialState: AccountState = { isLoggedIn: false };

export const reducer: Reducer<AccountState> = (state: AccountState = initialState, incomingAction: Action): AccountState => {
    const action = incomingAction as AccountAction;

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                jwt: action.token,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

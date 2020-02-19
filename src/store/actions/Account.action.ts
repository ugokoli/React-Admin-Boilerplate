import {AppThunkAction} from '../';
import httpConn from "../../utils/HttpConnection";
import {appActionCreators} from "./index";
import {NotificationView} from "./Notification.action";

export const LOGIN_SUCCESS = '[ACCOUNT] LOGIN_SUCCESS';

interface LoginCredential {
    username: string;
    password: string;
}

export interface AccountAction {
    type: string;
    token?: string;
}

export const actionCreators = {
    requestLogin: (credential: LoginCredential): AppThunkAction<AccountAction> => (dispatch, getState) => {
        httpConn().post.admin({
            url: "/operatorauth/login",
            data: {
                emailAddress: credential.username,
                password: credential.password
            }
        }).then(response => {
            dispatch({ type: LOGIN_SUCCESS, token: response.data });
        }).catch(err => {
            dispatch(appActionCreators.showNotification(NotificationView.Error, err.message));
        });
    }
};

import { call, put } from 'redux-saga/effects';
import * as Api from '../Api/login';

import { LOGIN_SUCCESS } from './login';
import { Alert } from 'react-native';

export const SIGNUP_INIT = 'SIGNUP_INIT' as const;
export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED' as const;
export const SIGNUP_SUCCESS = 'SIGNUPSUCCESS' as const;
export const SIGNUP_FAILURE = 'SIGNUPFAILURE' as const;

export type GetSignupAction = {
    type: typeof SIGNUP_REQUESTED;
}

export type SignupPayload = {
    email: string;
    username: string;
    password: string;
    status: string;
};

type SignupActionTypes = {
    type: string;
    payload: SignupPayload;
};

export type SignupResponse = {
    data: {
        token: string;
        pk: number;
    }
}

export type SignupError = {
    data: {
        email?: string[];
        username?: string[];
    };
    status: number;
}

export type SignupState = {
    pending: boolean;
    isSignup: boolean;
    isError: boolean;
    email: string;
    username: string;
};

export const requestLogin = () =>
    ({
        type: SIGNUP_REQUESTED
    })

export function* signupUser(action: SignupActionTypes) {
    try {
        const user = yield call(Api.signup, action.payload);
        // if(user.data.token && user.data.pk){
        //     yield AsyncStorage.setItem('token', user.data.token)
        //     yield AsyncStorage.setItem('pk', user.data.pk)
        // }
        yield put({ type: SIGNUP_SUCCESS, payload: user.data });
        yield put({ type: LOGIN_SUCCESS, payload: { token: user.data.token, user: { mbti: null, pk: user.data.pk, username: user.data.username } } });
    } catch (_error) {
        console.log(_error);
        if (!_error) {
            yield put({ type: SIGNUP_FAILURE, payload: { email: "", username: "", status: '500' } })
        } else {
            let { data }: SignupError = _error;
            const email = data.email ? (data.email[0]) : '';
            const username = data.username ? (data.username[0]) : '';
            yield put({ type: SIGNUP_FAILURE, payload: { email, username, status: "401" } })
        }
    }
}

const initialState: SignupState = {
    pending: false,
    isSignup: false,
    isError: false,
    email: '',
    username: '',
};

const reducer = (state: SignupState = initialState, action: SignupActionTypes) => {
    const { payload } = action;
    switch (action.type) {
        case SIGNUP_INIT:
            return {
                pending: false,
                isSignup: false,
                isError: false,
                email: '',
                username: '',
            };
        case SIGNUP_REQUESTED:
            return {
                ...state,
                pending: true,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                pending: false,
                isSignup: true,
            };
        case SIGNUP_FAILURE:
            if (action.payload.status === '500') {
                Alert.alert("WORKA!", "인터넷 연결이 필요한 작업입니다!");
            }
            return {
                ...state,
                pending: false,
                isSignup: false,
                isError: true,
                email: payload.email,
                username: payload.username,
            };
        default:
            return initialState
    }
}

export default reducer;

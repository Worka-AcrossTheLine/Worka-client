import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

import * as Api from '../Api/login';
import { ActionCreatorsMapObject, Dispatch } from 'redux';

export const LOGIN_SKIP = 'SKIP' as const;
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED' as const;
export const LOGIN_SUCCESS = 'LOGINSUCCESS' as const;
export const LOGIN_FAILURE = 'LOGINFAILURE' as const;

export type GetLoginAction = {
  type: typeof LOGIN_REQUESTED;
}

export type LoginPayload = {
  username: string;
  password: string;
};

type LoginActionTypes = {
  type: string;
  payload: LoginPayload;
};

type User = {
  pk: number;
  username: string;
  point: number;
  mbti: string | null;
};

export type LoginResponse = {
  data: {
    token: string;
    user: User;
  }
};

export type LoginState = {
  pending: boolean;
  isLogin: boolean;
  isSkip: boolean;
  mbti: string;
  token: string;
};

export const requestLogin = () =>
  ({
    type: LOGIN_REQUESTED
  })

export function* loginUser(action: LoginActionTypes) {
  try {
    const user: LoginResponse = yield call(Api.login, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: user });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE })
  }
}

const initialState: LoginState = {
  pending: false,
  isLogin: false,
  isSkip: false,
  mbti: '',
  token: '',
};

const reducer = handleActions(
  {
    [LOGIN_REQUESTED]: (state) => ({
      ...state,
      pending: true,
    }),
    [LOGIN_SKIP]: (state) => ({
      ...state,
      pending: false,
      isLogin: false,
      isSkip: true,
    }),
    [LOGIN_SUCCESS]: (state, { payload }: { type: string, payload: LoginResponse }) => {
      AsyncStorage.setItem('token', payload.data.token);
      return ({
        ...state,
        pending: false,
        isLogin: true,
        token: payload.data.token,
        mbti: payload.data.user.mbti ? payload.data.user.mbti : ''
      })
    },
    [LOGIN_FAILURE]: (state) => ({
      ...state,
      pending: false,
      isLogin: false,
    }),
  },
  initialState,
);

export default reducer;

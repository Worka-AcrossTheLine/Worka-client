import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';

import * as Api from '../Api/login';
import { ActionCreatorsMapObject, Dispatch } from 'redux';

export const LOGIN_SKIP = 'SKIP' as const;
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED' as const;
export const LOGIN_SUCCESS = 'LOGINSUCCESS' as const;
export const LOGIN_FAILURE = 'LOGINFAILURE' as const;

export type GetLoginAction = {
  type: typeof LOGIN_REQUESTED;
}

type LoginPayload = {
  email: string;
  password: string;
};

type LoginActionTypes = {
  type: string;
  payload: LoginPayload;
};

export type LoginState = {
  pending: Boolean;
  isLogin: Boolean;
  isSkip: Boolean;
  token: string;
};

export const requestLogin = () =>
  ({
    type: LOGIN_REQUESTED
  })

export function* loginUser(action: LoginActionTypes) {
  try {
    const user = { token: "asdefgh" };
    // const user = yield call(Api.login, action.payload);
    yield delay(1000)
    yield put({ type: LOGIN_SUCCESS, payload: user });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE })
  }
}

const initialState: LoginState = {
  pending: false,
  isLogin: false,
  isSkip: false,
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
    [LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      pending: false,
      isLogin: true,
      token: payload.token,
    }),
    [LOGIN_FAILURE]: (state) => ({
      ...state,
      pending: false,
      isLogin: false,
    }),
  },
  initialState,
);

export default reducer;

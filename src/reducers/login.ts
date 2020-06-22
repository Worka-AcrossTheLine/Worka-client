import { call, put } from 'redux-saga/effects';
import { handleActions } from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

import * as Api from '../Api/login';

export const LOGIN_INIT = "LOGIN_INIT" as const;
export const LOGIN_SKIP = 'SKIP' as const;
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED' as const;
export const LOGIN_SUCCESS = 'LOGINSUCCESS' as const;
export const LOGIN_FAILURE = 'LOGINFAILURE' as const;

export const FORGOT_PASSWORD_INIT = 'FORGET_PASSWORD_INIT';
export const FORGOT_PASSWORD_REQUEST = 'FORGET_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE';

export const WITHDRAWAL = 'WITHDRAWAL' as const;

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
export const LOGOUT = 'LOGOUT' as const;

export const TENDENCY_SUCSSES = 'TENDENCY_SUCSSES' as const;
export const TENDENCY = 'TENDENCY' as const;

type LoginActionTypes = {
  type: string;
  payload: LoginPayload;
};

export type GetLoginAction = {
  type: typeof LOGIN_REQUESTED;
}

export type LoginPayload = {
  username: string;
  password: string;
};


type payload = {
  token: string;
  user: User
}

export type forgetPayload = {
  email: string;
  username: string;
}

export type forgetResponse = {

}


type TendencyActionTypes = {
  type: string;
  payload: {
    mbti: string;
    token: string;
  }
}

type User = {
  pk: number;
  username: string;
  mbti: string | null;
};


export type LoginResponse = {
  data: payload
};

export type TendencyResponse = {
  data: {
    token: string;
    user: User;
  }
};

type withdrawal = {
  type: string;
  payload: {
    token: string;
  }
}

export type LoginState = {
  pending: boolean;
  isLogin: boolean;
  isError: boolean;
  isSkip: boolean;
  data: User;
  mbti: string;
  token: string;
};

export type ForgotState = {
  fetching: boolean;
  success: boolean;
  error: boolean;
}

export const requestLogin = () =>
  ({
    type: LOGIN_REQUESTED
  })

export function* loginUser(action: LoginActionTypes) {
  try {
    const user: LoginResponse = yield call(Api.login, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: user.data });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE })
  }
}

type forgotAction = {
  type: string;
  payload: {
    email: string;
    username: string;
  }
}

export function* forgotPassword(action: forgotAction) {
  try {
    yield call(Api.forgotPassword, action.payload);
    yield put({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: FORGOT_PASSWORD_FAILURE });
  }
}

export function* tendencyUser(action: TendencyActionTypes) {
  try {
    yield call(Api.tendency, action.payload);
    yield put({ type: TENDENCY_SUCSSES, payload: action.payload })
  } catch (err) {
    yield put({ type: LOGIN_FAILURE });
  }
}

export function* logout() {
  try {
    yield AsyncStorage.removeItem('token');
    yield put({ type: LOGOUT })
  } catch (error) {

  }
}


export function* withdrawal({ payload: { token } }: withdrawal) {
  try {
    yield call(Api.withdrawal, { token });
    yield put({ type: LOGOUT_REQUEST })
  } catch (error) {
  }
}



const initialState: LoginState = {
  pending: false,
  isLogin: false,
  isError: false,
  isSkip: false,
  data: {
    pk: 0,
    username: '',
    mbti: ''
  },
  mbti: '',
  token: '',
};

type action = {
  type: string;
  payload: payload;
}

const passwordInitialState: ForgotState = {
  fetching: false,
  success: false,
  error: false,
}

const reducer = (state: LoginState = initialState, action: action) => {
  switch (action.type) {
    case LOGIN_INIT:
      return {
        ...state,
        pending: false,
        isLogin: false,
        isError: false,
        isSkip: false,
        token: ''
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SKIP:
      return {
        ...state,
        pending: false,
        isLogin: false,
        isSkip: true,
      };
    case LOGIN_SUCCESS:
      const { payload } = action;
      if (payload.token) {
        AsyncStorage.setItem('token', payload.token);
      }
      return {
        ...state,
        pending: false,
        isLogin: true,
        token: payload.token || state.token,
        data: payload.user,
        mbti: payload.user.mbti || ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        isError: true,
        isLogin: false,
      };
    case TENDENCY:
      return {
        ...state,
        pending: true,
      };
    case TENDENCY_SUCSSES:
      return {
        ...state,
        pending: false,
        mbti: action.payload,
      }
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export const forgotReducer = (state: ForgotState = passwordInitialState, action: action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_INIT:
      return {
        ...passwordInitialState
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        fetching: true,
        success: false,
        error: false,
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        fetching: false,
        success: true,
        error: false
      }
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
        success: false
      }
    default:
      return passwordInitialState;
  }
}

export default reducer;
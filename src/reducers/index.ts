import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga/effects';

import login, { LoginState } from './login';

export type RootState = {
    login: LoginState
}

export default combineReducers({ login });

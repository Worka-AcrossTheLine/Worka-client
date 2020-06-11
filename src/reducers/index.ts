import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga/effects';

import login, { LoginState } from './login';
import signup, { SignupState } from './signup'

export type RootState = {
    login: LoginState,
    signup: SignupState
}

export default combineReducers({ login, signup });

import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga/effects';

import login, { LoginState } from './login';
import signup, { SignupState } from './signup'
import {getFeed, FeedState} from '../state/Feed/Reducer'
export type RootState = {
    login: LoginState,
    signup: SignupState,
    feed: FeedState
}

export default combineReducers({ login, signup, feed: getFeed });

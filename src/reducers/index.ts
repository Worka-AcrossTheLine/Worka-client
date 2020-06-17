import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga/effects';

import login, { LoginState } from './login';
import signup, { SignupState } from './signup'
import {getFeed, FeedState} from '../state/Feed/Reducer'
import setting, { SettingState } from './setting'
import {QuestionState, questionFeed} from "../state/Question/Reducer";

export type RootState = {
    login: LoginState,
    signup: SignupState,
    feed: FeedState,
    setting: SettingState,
    question : QuestionState
}

export default combineReducers({ login, signup, feed: getFeed, setting, question: questionFeed });

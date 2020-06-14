import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { LOGIN_REQUESTED, TENDENCY, loginUser, tendencyUser } from '../reducers/login';
import { SIGNUP_REQUESTED, signupUser } from '../reducers/signup'
import {GET_FEED_REQUEST} from "../state/Feed/Action";
import { handleGetFollower } from "../state/Feed/Saga"



export interface Action {
  type: string;
  payload: any;
}


function* watchLoginRequested() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
  yield takeLatest(SIGNUP_REQUESTED, signupUser);
  yield takeLatest(TENDENCY, tendencyUser);
  yield takeLatest(GET_FEED_REQUEST, handleGetFollower);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequested()
  ])
}

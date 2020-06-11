import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { LOGIN_REQUESTED, loginUser } from '../reducers/login';
import { SIGNUP_REQUESTED, signupUser } from '../reducers/signup'

function* watchLoginRequested() {
  yield takeEvery(LOGIN_REQUESTED, loginUser);
  yield takeEvery(SIGNUP_REQUESTED, signupUser);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequested()
  ])
}

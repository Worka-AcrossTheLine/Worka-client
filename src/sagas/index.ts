import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { LOGIN_REQUESTED, TENDENCY, loginUser, tendencyUser } from '../reducers/login';
import { SIGNUP_REQUESTED, signupUser } from '../reducers/signup'

function* watchLoginRequested() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
  yield takeLatest(SIGNUP_REQUESTED, signupUser);
  yield takeLatest(TENDENCY, tendencyUser)
}

export default function* rootSaga() {
  yield all([
    watchLoginRequested()
  ])
}

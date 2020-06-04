import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { LOGIN_REQUESTED, loginUser } from '../reducers/login';

function* watchLoginRequested() {
  yield takeEvery(LOGIN_REQUESTED, loginUser);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequested()
  ])
}

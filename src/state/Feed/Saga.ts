import { call, put, takeLatest } from 'redux-saga/effects';
import { getFeed, getFeedDetail, makeFeed } from '../../Api/Feed';
import {
  GET_FEED_FAIL, GET_FEED_REQUEST, GET_FEED_SUCCESS,
  getFeedSuccess, MAKE_FEED_FAIL, makeCard,
  makeFeedSuccess
} from './Action';
import {LOGIN_SUCCESS, LOGOUT, LOGOUT_REQUEST} from "../../reducers/login";
import {AsyncStorage} from "react-native";



export function* handleGetFeed({ payload: { token } }: { type: string, payload: { token: string } }) {
  try {
    const response = yield call(getFeed, { token });
    yield put({ type: LOGIN_SUCCESS, payload: { token, user: response.data.request_user } })
    yield put(getFeedSuccess(response.data.results));
  } catch (err) {
    if (err.status === 401) {
      yield put({ type: LOGOUT_REQUEST });
      alert('인증이 유효하지 않습니다.')
    }else if (err.status === 400) {
      alert('잘못된 요청입니다.')
    }else if (err.status === 500) {
      alert('네트워크에러')
    }
    yield put({ type: GET_FEED_FAIL, payload: err })
  }
}

export function* handleOnlyGetFeed({ payload: { token } }: { type: string, payload: { token: string } }) {
  try {
    const response = yield call(getFeed, { token });
    yield put(getFeedSuccess(response.data.results));
  } catch (err) {
    if (err.status === 401) {
      yield put({ type: LOGOUT });
      alert('인증이 유효하지 않습니다.')
    }else if (err.status === 400) {
      alert('잘못된 요청입니다.')
    }else if (err.status === 500) {
      alert('네트워크에러')
    }
    yield put({ type: GET_FEED_FAIL, payload: err })
  }
}


export function* handleMakeFeed({ type, payload: { title, tags, text, images, token } }: { type: string, payload: makeCard }) {
  try {
    const response = yield call(makeFeed, { title, tags, text, images, token });
    const getResponse = yield call(getFeed, {token})
    yield put(makeFeedSuccess(response.data));
    yield put(getFeedSuccess(getResponse.data.results));
    alert('카드가 작성 되었습니다.')
  } catch (err) {
    if (err.status === 401) {
      yield put({ type: LOGOUT });
      alert('인증이 유효하지 않습니다.')
    }else if (err.status === 400) {
      alert('잘못된 요청입니다.')
    }else if (err.status === 500) {
      alert('네트워크에러')
    }else if (err.status === 413) {
      alert('이미지의 파일이 너무 큽니다')
    }
    yield put({ type: MAKE_FEED_FAIL, payload: err })
  }
}
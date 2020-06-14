import {call, put, takeLatest} from 'redux-saga/effects';
import {getFeed} from '../../Api/Feed';
import {GET_FEED_FAIL, getFeedSuccess} from './Action';


export function* handleGetFollower() {
  try{
    console.log('start')
  const response = yield call( getFeed );
    yield put(getFeedSuccess(response.data.results));

  } catch (err) {
    yield put({ type: GET_FEED_FAIL })
  }
}

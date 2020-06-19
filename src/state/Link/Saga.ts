import { call, put } from "redux-saga/effects"
import { getLink } from "./Reducer";
import { getLinkSuccess, GET_LINK_FAIL } from "./Action";

export function*handleGetLink() {
    try {
        const response = yield call( getLink );
          yield put(getLinkSuccess(response.data.results));
    } catch (err) {
        yield put({type: GET_LINK_FAIL, payload: err})
    }
}
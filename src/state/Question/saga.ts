import {call, put} from "redux-saga/effects";
import {getFeed} from "../../Api/Feed";
import {MAKE_QUESTION_FAIL,makeQuestionSuccess} from "../Question/Action";

export function* handleQuestion() {
    try{
        const response = yield call( getFeed );
        yield put(makeQuestionSuccess(response.data.results));
    } catch (err) {
        yield put({ type: MAKE_QUESTION_FAIL , payload: err })
    }
}

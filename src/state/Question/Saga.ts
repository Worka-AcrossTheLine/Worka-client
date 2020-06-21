import { call, put } from "redux-saga/effects";
import { MAKE_QUESTION_FAIL, GET_QUESTION_SUCCESS, makeQuestionSuccess, getQuestionSuccess, GET_QUESTION_FAIL } from "../Question/Action";
import { makeQuestion, makeQuestionCard, getQuestion, } from "../../Api/Question";
import { Action } from "../index";

export function* handleQuestion(action: Action) {
    try {
        const response = yield call(makeQuestionCard, action.payload);
        yield call(makeQuestion, { id: response.data.id, question: action.payload.question, token: action.payload.token })
        yield put(makeQuestionSuccess(response.data));
        alert('질문지 생성 완료')
    } catch (err) {
        yield put({ type: MAKE_QUESTION_FAIL, payload: err })
    }
}

export function* handleGetQuestion({ type, payload: { token } }: { type: string, payload: { token: string } }) {
    try {
        const response = yield call(getQuestion, { token })
        yield put(getQuestionSuccess(response.data));
    } catch (err) {
        yield put({ type: GET_QUESTION_FAIL, payload: err })
    }
}

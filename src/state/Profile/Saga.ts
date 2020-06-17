import {call, put} from "redux-saga/effects";
import {PROFILE_FAIL,ProfileSuccess} from "../Profile/Action";
import {makeQuestion, makeQuestionCard} from "../../Api/Profile";
import {Action} from "../index";

export function* handleProfile(action : Action) {
    try{
        const response = yield call( makeQuestionCard, action.payload );
        yield call(makeQuestion, {id: response.data.id, question : action.payload.question, token: action.payload.token})
        yield put(ProfileSuccess(response.data));
    } catch (err) {
        yield put({ type: PROFILE_FAIL , payload: err })
    }
}

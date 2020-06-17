import {Action} from "../index";
import {PROFILE_SUCCESS, PROFILE_FAIL, PROFILE_REQUEST} from "./Action";

export interface ProfileState {
    fetching: boolean;
    data: any;
    err: any;
}

const initialState: ProfileState = {fetching: false, data: null, err: null};

export const ProfileFeed = (state: ProfileState = initialState, action: Action) => {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                fetching: true,
                data: null,
                err: null,
            };
        case PROFILE_SUCCESS:
            return {
                fetching: false,
                data: action.payload.data,
                err: null,
            };
        case PROFILE_FAIL:
            return {
                fetching: false,
                data: null,
                err: action.payload.err,
            };
        default:
            return state;
    }
};

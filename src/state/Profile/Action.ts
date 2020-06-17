export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAIL = 'PROFILE_FAIL'


export const ProfileRequest = (data : any) => {
    return {type: PROFILE_REQUEST , payload : {data}};
};
export const ProfileSuccess = (data: any) => {
    return {type: PROFILE_SUCCESS, payload: {data}};
};
export const ProfileFail = (err: any) => {
    return {type: PROFILE_FAIL, payload: {err}};
};
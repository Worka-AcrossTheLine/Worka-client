export const MAKE_QUESTION_REQUEST = 'MAKE_QUESTION_REQUEST' as const;
export const MAKE_QUESTION_SUCCESS = 'MAKE_QUESTION_SUCCESS' as const;
export const MAKE_QUESTION_FAIL = 'MAKE_QUESTION_FAIL' as const;


export const makeQuestionRequest = (data : any) => {
    return {type: MAKE_QUESTION_REQUEST , payload : {data}};
};
export const makeQuestionSuccess = (data: any) => {
    return {type: MAKE_QUESTION_SUCCESS, payload: {data}};
};
export const MakeQuestionFail = (err: any) => {
    return {type: MAKE_QUESTION_FAIL, payload: {err}};
};
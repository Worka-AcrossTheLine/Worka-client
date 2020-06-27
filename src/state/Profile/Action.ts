

export interface user {
    pk: number,
    username: string,
    user_image: string,
    mento: number,
    mentiee: number,
    mbti: string,
    comments: string,
}

export interface author {
    pk: number,
    username: string,
    user_image: string,
}
export interface page {
    id: string,
    author: author,
    title: string,
    tags: string[],
    questions: number,
    created_at: string,
}

export interface card {
    id: number,
    author: author,
    images: string,
    title: string;
    text: string,
    created_at: string,
    updated_at: string,
    "number_of_likes": string,
    "number_of_comments": string,
    "tags": string[]
}

export interface Profile {
    user: user
    pages: page[]
    cards: card[]
}
export interface ProfileQuestion {
    count: number,
    results: {
        id: number,
        content: string,
        created_at: string
    }
}

export interface PatchProfileImagePayload {
    token: string;
    images: string;
    pk: string;
}
export interface Comment {
    id: number,
    author: author,
    text: string,
    is_like: string,
    is_unlike: string,
    like_count: string,
    unlike_count: string,
    is_mento: string,
    created_at: string
}

export interface CommentResponse {
    count: number,
    results: Comment[]
}

export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAIL = 'PROFILE_FAIL'
// 다른사람 프로필 들어가기
export const PROFILE_INFO_REQUEST = 'PROFILE_INFO_REQUEST'
export const PROFILE_INFO_SUCCESS = 'PROFILE_INFO_SUCCESS'
export const PROFILE_INFO_FAIL = 'PROFILE_INFO_FAIL'
// 이미지 바꾸기
export const PATCH_PROFILE_IMAGES_REQUEST = 'PATCH_PROFILE_IMAGES_REQUEST'
export const PATCH_PROFILE_IMAGES_SUCCESS = 'PATCH_PROFILE_IMAGES_SUCCESS'
export const PATCH_PROFILE_IMAGES_FAIL = 'PATCH_PROFILE_IMAGES_FAIL'

export const PROFILE_QUESTION_SUCCESS = 'PROFILE_QUESTION_SUCCESS'
export const PROFILE_CARD_SUCCESS = "PROFILE_CARD_SUCCESS"

export const PATCH_COMMENTS_SUCCESS = 'PATCH_COMMENTS_SUCCESS'
export const PATCH_COMMENTS_REQUEST = 'PATCH_COMMENTS_REQUEST'


export const ProfileRequest = (data: string) => {
    return { type: PROFILE_REQUEST, payload: { data } };
};
export const ProfileSuccess = (data: Profile) => {
    return { type: PROFILE_SUCCESS, payload: { data } };
};
export const ProfileFail = (err: boolean) => {
    return { type: PROFILE_FAIL, payload: { err } };
};

export const QuestionSuccess = (data: ProfileQuestion[]) => {
    return { type: PROFILE_QUESTION_SUCCESS, payload: { data } };
};

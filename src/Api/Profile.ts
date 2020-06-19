import axios, {AxiosError, AxiosPromise} from "axios";
import base from './baseURL.json'
const reqresApi = axios.create({
    baseURL: base.baseURL,
});

export const getProfile = ({pk, token}:  {token: string, pk: string} ) => {
    return reqresApi.get(`profile/${pk}/`, { headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            throw error.response
        });
};

export const getQuestion = ({pk, token}:{pk:string, token:string}) => {
    return reqresApi.get(`pages/${pk}/questions/`,{ headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            throw error.response
        });
};

export const getQuestionComment = ({account_pk,pk,question_id,token}:{account_pk:string, pk:string, question_id:string, token:string}) => {
    return reqresApi.get(`/profile/${account_pk}/pages/${pk}/questions/${question_id}/comments/`,{ headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            throw error.response
        });
};

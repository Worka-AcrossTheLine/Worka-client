import axios, {AxiosError, AxiosPromise} from "axios";
import base from './baseURL.json'
const reqresApi = axios.create({
    baseURL: base.baseURL,
});

export const makeQuestionCard = ({tags, title, token}:  {token: string, title: string, tags:[] }) => {
    console.log(tags+"dd")
    return reqresApi.post(`pages/`, {title: title, tags: tags}, { headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            throw error.response
        });
};

export const makeQuestion = ({id, question, token}:{id:string, question:string, token:string}) => {
    console.log(question)
    return reqresApi.post(`pages/${id}/questions/`, {content: question, title: 'kim'},{ headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            throw error.response
        });
};

import axios, {AxiosError, AxiosPromise} from "axios";

const reqresApi = axios.create({
    baseURL: 'http://172.30.1.13:8000/pages',
});

export const makeQuestion = (body: any) => {
    return reqresApi.post(``, body)
        .catch((error: AxiosError) => {
            throw error.response
        });
};
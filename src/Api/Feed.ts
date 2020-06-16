import axios, { AxiosError, AxiosPromise } from "axios";

const reqresApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/post',
});

export const getFeed = () => {
    return reqresApi.get(`/all/`)
        .catch((error: AxiosError) => {
            throw error.response
        });
};


export const getFeedDetail = (body: string) => {
    return reqresApi.get(`/detail/${body}/`)
        .catch((error: AxiosError) => {
            throw error.response
        });
};


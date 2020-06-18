import axios, { AxiosError, AxiosPromise } from "axios";
import base from './baseURL.json'

const reqresApi = axios.create({
    baseURL: base.baseURL
});

export const getFeed = () => {
    return reqresApi.get(`post/all/`)
        .catch((error: AxiosError) => {
            throw error.response
        });
};


export const getFeedDetail = (body: string) => {
    return reqresApi.get(`post/detail/${body}/`)
        .catch((error: AxiosError) => {
            throw error.response
        });
};

export const makeFeed = (body: any) => {
    const form = new FormData();
    // console.log(body);
    for (let key in body) {
        if (key === 'images') {
            let match = /\.(\w+)$/.exec(body[key]);
            let type = match ? `image/${match[1]}` : `image`;
            form.append(key, { uri: body[key], name: body[key].split('/').pop(), type })
        }
        form.append(key, body[key]);
    }
    // form.append('title', "test title");
    // form.append('tag', "your,like,tag");
    // form.append('images', "unnamed.jpg");
    // form.append('text', "unnamed.jpg");
    console.log(form);
    return reqresApi.post(`post/feed/`, form, { headers: { Authorization: `JWT ${body.token}`, 'Content-Type': 'application/x-www-form-urlencoded' } })
        .catch((error: AxiosError) => {
            console.log(error.response);
            throw error.response
        });
};


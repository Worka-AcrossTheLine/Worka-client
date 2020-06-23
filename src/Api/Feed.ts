import { Alert } from 'react-native';
import axios, { AxiosError, AxiosPromise } from "axios";
import base from './baseURL.json'
import { responseFeeds } from "../state/Feed/Action";

import { makeCard } from '../state/Feed/Action'
import { string } from "prop-types";

const reqresApi = axios.create({
    baseURL: base.baseURL
});

export const getFeed = ({ token }: { token: string }): AxiosPromise<responseFeeds> => {
    return reqresApi.get(`post/feed/`, { headers: { Authorization: `JWT ${token}` } })
        .catch((error: AxiosError) => {
            if (error) {
                throw error.response
            }
            throw { status: 500 }
        });
};


export const getFeedDetail = (body: string) => {
    return reqresApi.get(`post/detail/${body}/`)
        .catch((error: AxiosError) => {
            if (error) {
                throw error.response
            }
            throw { status: 500 }
        });
};

interface Form extends FormData {
    append(name: string,
        value: string | Blob | string[] | {
            uri: string;
            name?: string;
            type: string
        }): void;
}

export const makeFeed = ({ title,
    tags,
    text,
    images,
    token
}: makeCard) => {
    const form: Form = new FormData();
    form.append("title", title);
    form.append("tags", ["123", "456"]);
    form.append("text", text);
    form.append("token", token);
    let match = /\.(\w+)$/.exec(images);
    let type = match ? `image/${match[1]}` : `image`;
    if (images) {
        // form.append('images', JSON.stringify({ uri: images, name: images.split('/').pop(), type }));
        form.append('images', { uri: images, name: images.split('/').pop(), type });
    }
    return reqresApi.post(`post/feed/`, { title, text, tags: ["123", "123123"], images: { uri: images, name: images.split('/').pop(), type } }, {
        headers: {
            Authorization: `JWT ${token}`, 'Content-Type': 'application/x-www-form-urlencoded', 'charset': 'utf-8'
        }
    })
        .catch((error: AxiosError) => {
            console.log(error);
            if (error) {
                throw error.response
            }
            throw { status: 500 }
        });
};


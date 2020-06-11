import axios, { AxiosPromise } from 'axios';

import { LoginPayload, LoginResponse } from '../reducers/login'
import { SignupPayload, SignupResponse } from '../reducers/signup';

const reqresApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/accounts',
});

export const login = (
  loginPayload: LoginPayload,
): AxiosPromise<LoginResponse> => {
  const { username, password } = loginPayload;
  return reqresApi.post(`/login/`, {
    username,
    password
  });
};

export const signup = (
  signupPayload: SignupPayload): AxiosPromise<SignupResponse> => {
  const { email, username, password, year, month, day } = signupPayload;
  return reqresApi.post('/signup/', {
    email,
    username,
    password,
    birth_date: `${year}-${month}-${day}`
  })
}

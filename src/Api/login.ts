import axios, {AxiosPromise} from 'axios';

type LoginPayload = {
  email: string;
  password: string;
};

type UserResponse = {
  data: User;
};

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const reqresApi = axios.create({
  baseURL: 'https://reqres.in',
});

export const login = (
  loginPayload: LoginPayload,
): AxiosPromise<UserResponse> => {
  const {email, password} = loginPayload;
  console.log(email, password);
  return reqresApi.get(`/api/users/${password}`);
};

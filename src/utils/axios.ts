import Axios, { InternalAxiosRequestConfig } from 'axios';

export const apiConfig = {
    baseURL: "https://donas.me",
    apis: {
        get: {},
        post: {
            login: "/api/v1/login",
        },
    },
};
export const axios = Axios.create({
    baseURL: apiConfig.baseURL,
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = ""; // TODO: token handling
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    return Promise.reject(error);
  }
);


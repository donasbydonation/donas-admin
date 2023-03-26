import Axios, { InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = ""; // TODO: token handling
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // TODO: api calling
});

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

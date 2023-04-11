import Axios from 'axios';

export const apiConfig = {
    baseURL: "https://donas.me",
    apis: {
        creators: {
            httpGET: "/api/v1/creators",
            httpPOST: "/api/v1/creator",
        },
        login: {
            httpPOST: "/api/v1/login",
        },
    },
};

export const axios = Axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        Accept: "application/json",
    },
});

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

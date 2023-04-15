import Axios from 'axios';

export const apiConfig = {
    baseURL: "https://donas.me",
    apis: {
        creators: {
            httpGET: "/api/v1/creators",
            httpPOST: "/api/v1/creator",
            all: {
                httpGET: "/api/v1/creator-info/all",
            },
        },
        schedules: {
            httpGET: "/api/v1/schedules",
            httpPOST: "/api/v1/schedule",
            httpDELETE: {
                path: {
                    getString: (id: number) => (`/api/v1/schedule/${id}`),
                    getRegex: () => (/\/api\/v1\/schedule\/\d+/),
                },
            },
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

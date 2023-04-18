import Axios from 'axios';
import { cookieConfig, getCookie } from '@/utils/cookie';

export const apiConfig = {
    baseURL: "https://donas.me",
    apis: {
        creators: {
            httpGET: "/api/v1/creators",
            httpPOST: "/api/v1/creator",
            all: {
                httpGET: "/api/v1/creator-info/all",
            },
            httpDELETE: {
                path: {
                    getString: (id: number) => (`/api/v1/creator/${id}`),
                    getRegex: () => (/\/api\/v1\/creator\/\d+/),
                },
            },
            httpPUT: {
                path: {
                    getString: (id: number) => (`/api/v1/creator/${id}`),
                    getRegex: () => (/\/api\/v1\/creator\/\d+/),
                },
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
            httpPUT: {
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
        if (error.response?.status === 401) {
            console.warn(message);
        } else {
            console.error(message);
        }
        return Promise.reject(error);
    }
);

axios.interceptors.request.use((config) => {
    const token = getCookie(cookieConfig.names.accessToken);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

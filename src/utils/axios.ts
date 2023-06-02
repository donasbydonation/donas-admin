import Axios from 'axios';
import * as auth from './auth';
import { removeCookie } from './cookie';

export const apiConfig = {
    apis: {
        creators: {
            httpGET: "/api/v1/creator-infos",
            httpPOST: "/api/v1/creator-infos",
            all: {
                httpGET: "/api/v1/creator-infos/all",
            },
            httpDELETE: {
                path: {
                    getString: (id: number) => (`/api/v1/creator-infos/${id}`),
                    getRegex: () => (/\/api\/v1\/creator-infos\/\d+/),
                },
            },
            httpPUT: "/api/v1/creator-infos",
        },
        schedules: {
            httpGET: "/api/v1/schedules",
            httpPOST: "/api/v1/schedules",
            httpDELETE: {
                path: {
                    getString: (id: number) => (`/api/v1/schedules/${id}`),
                    getRegex: () => (/\/api\/v1\/schedules\/\d+/),
                },
            },
            httpPUT: "/api/v1/schedules",
            excel: {
                httpPOST: "/api/v2/schedules/excel",
            },
        },
        login: {
            httpPOST: "/api/v1/admin/login",
        },
        refresh: {
            httpPOST: "/api/v1/admin/refresh",
        },
    },
};

export const axios = Axios.create({
    headers: {
        Accept: "application/json",
    },
});

axios.interceptors.request.use(auth.setAuthorizationHeader);

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        if (error.response?.status === 401) {
            if (auth.isRefreshRequired(error.response)) {
                return auth.refreshAccessToken(error.response.config);
            } else {
                removeCookie(auth.authConfig.cookies.names.accessToken);
                removeCookie(auth.authConfig.cookies.names.refreshToken);
                removeCookie(auth.authConfig.cookies.names.username);
                window.alert("로그인 정보가 올바르지 않습니다.");
                window.location.href = "/login";
                console.warn(message);
            }
        } else {
            console.error(message);
        }
        return Promise.reject(error);
    }
);

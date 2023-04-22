import { axios, apiConfig }  from './axios';
import { getCookie, setCookie } from './cookie';
import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Cookie
export const authConfig = {
    cookies: {
        names: {
            accessToken: "access-token",
            refreshToken: "refresh-token",
            username: "username",
        },
    },
};

// API Call

export type GetAccessTokenRequestDTO = {
    username: string,
    password: string,
};

export type GetAccessTokenResponseDTO = {
    accessToken: string,
    refreshToken: string,
};

export function getAccessToken(data: GetAccessTokenRequestDTO): Promise<GetAccessTokenResponseDTO> {
    return axios.post(apiConfig.apis.login.httpPOST, data);
}

export function refreshAccessToken(config: AxiosRequestConfig) {
    return axios.post(apiConfig.apis.refresh.httpPOST, {
        refreshToken: getCookie(authConfig.cookies.names.refreshToken),
        username: getCookie(authConfig.cookies.names.username),
    }).then((res: unknown) => {
        // Effectively convert type
        const body = res as GetAccessTokenResponseDTO;
        setCookie(authConfig.cookies.names.accessToken, body.accessToken);
        setCookie(authConfig.cookies.names.refreshToken, body.refreshToken);
        return axios(config);
    });
}

export function deleteAccessToken() {
    return axios.post(apiConfig.apis.logout.httpPOST, {
        username: getCookie(authConfig.cookies.names.username),
    });
}

// AXIOS Intercepter

export function isRefreshRequired(res: AxiosResponse): boolean {
    return (res.config.url !== apiConfig.apis.refresh.httpPOST) &&
        !!getCookie(authConfig.cookies.names.refreshToken);
};

export function setAuthorizationHeader(config: InternalAxiosRequestConfig) {
    const token = getCookie(authConfig.cookies.names.accessToken);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

// Util func

export function isAuth(): boolean {
    return !!getCookie(authConfig.cookies.names.accessToken) &&
        !!getCookie(authConfig.cookies.names.refreshToken) &&
        !!getCookie(authConfig.cookies.names.username);
}

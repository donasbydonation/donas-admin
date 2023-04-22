import { axios, apiConfig }  from './axios';
import { cookieConfig, getCookie, setCookie } from './cookie';
import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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
        refreshToken: getCookie(cookieConfig.names.refreshToken),
        username: getCookie(cookieConfig.names.username),
    }).then((res: unknown) => {
        // Effectively convert type
        const body = res as GetAccessTokenResponseDTO;
        setCookie(cookieConfig.names.accessToken, body.accessToken);
        setCookie(cookieConfig.names.refreshToken, body.refreshToken);
        return axios(config);
    });
}

// AXIOS Intercepter

export function isRefreshRequired(res: AxiosResponse): boolean {
    return (res.config.url !== apiConfig.apis.refresh.httpPOST) &&
        !!getCookie(cookieConfig.names.refreshToken);
};

export function setAuthorizationHeader(config: InternalAxiosRequestConfig) {
    const token = getCookie(cookieConfig.names.accessToken);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

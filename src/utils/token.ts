import { cookies, defaultSetCookieOption } from './cookie';

export const aceessTokenCookieName = "access-token";
export const refreshTokenCookieName = "refresh-token";

export function setAccessToken(value: string) {
    cookies.set(aceessTokenCookieName, value, defaultSetCookieOption);
}

export function getAccessToken(): string {
    return cookies.get(aceessTokenCookieName);
}

export function setRefreshToken(value: string) {
    cookies.set(refreshTokenCookieName, value, defaultSetCookieOption);
}

export function getRefreshToken(): string {
    return cookies.get(refreshTokenCookieName);
}

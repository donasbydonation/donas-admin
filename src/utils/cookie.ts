import Cookies, { CookieSetOptions } from 'universal-cookie';

export const cookieConfig = {
    names: {
        accessToken: "access-token",
        refreshToken: "refresh-token",
    },
    setOptions: {
        path: "/",
        secure: true,
        sameSite: "none",
    } as CookieSetOptions,
};

export const cookies = new Cookies();

export function setCookie(name: string, value: string) {
    cookies.set(name, value, cookieConfig.setOptions);
}

export function getCookie(name: string): string {
    return cookies.get(name);
}

import Cookies, { CookieSetOptions } from 'universal-cookie';

export const cookieConfig: CookieSetOptions  = {
    path: "/",
    secure: true,
    sameSite: "none",
};

export const cookies = new Cookies();

export function setCookie(name: string, value: string) {
    cookies.set(name, value, cookieConfig);
}

export function getCookie(name: string): string {
    return cookies.get(name);
}

export function removeCookie(name: string) {
    return cookies.remove(name);
}

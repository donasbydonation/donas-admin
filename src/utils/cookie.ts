import Cookies, { CookieSetOptions } from 'universal-cookie';

export const cookies = new Cookies();
export const defaultSetCookieOption: CookieSetOptions = {
    path: "/",
    secure: true,
    sameSite: "none",
};

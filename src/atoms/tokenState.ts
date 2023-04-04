import { atom } from 'recoil';

export type Token = {
    access: string,
    refresh: string,
};

type TokenState = {
    key: string,
    default: Token,
};

export const tokenState = atom({
    key: "tokenState",
    default: {
        access: "",
        refresh: "",
    },
} as TokenState);

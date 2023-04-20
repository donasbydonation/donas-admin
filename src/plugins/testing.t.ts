import { AxiosRequestConfig } from 'axios';
import * as data from './data';

const testing = {
    login: {
        unauthorizedForInvaidUsername: (req: AxiosRequestConfig) => (
            JSON.parse(req.data).username === "invalid"
        ),
    },
    refresh: {
        unauthorizedForInvaidRefreshToken: (req: AxiosRequestConfig) => (
            JSON.parse(req.data).refreshToken === "invalid"
        ),
    },
    creators: {
        unauthorizedForInvalidAccessToken: (req: AxiosRequestConfig) => (
            req.headers?.Authorization === `Bearer invalid`
        ),
    },
};

export default testing;

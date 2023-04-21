import { AxiosRequestConfig } from 'axios';
import * as data from './data';

const testing = {
    login: {
        unauthorizedForInvaidUsername: (req: AxiosRequestConfig) => (
            JSON.parse(req.data).username === "invalid"
        ),
    },
    refresh: {
        authorizedForValidRefreshToken: (req: AxiosRequestConfig) => {
            const refreshToken = JSON.parse(req.data).refreshToken;
            return (refreshToken === data.login.success.refreshToken) ||
                (refreshToken === data.login.refresh.refreshToken);
        },
    },
    creators: {
        unauthorizedForInvalidAccessToken: (req: AxiosRequestConfig) => (
            req.headers?.Authorization === `Bearer invalid`
        ),
    },
};

export default testing;

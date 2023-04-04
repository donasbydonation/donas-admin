import { axios, apiConfig } from '@/utils/axios';

export type LoginRequestDto = {
    id: string,
    pw: string,
};

export type LoginResponseDTO = {
    accessToken: string,
    refreshToken: string,
};

export function login(data: LoginRequestDto): Promise<LoginResponseDTO> {
    return axios.post(apiConfig.apis.login.httpPOST, data);
}

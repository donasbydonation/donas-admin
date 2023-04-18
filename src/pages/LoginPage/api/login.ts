import { axios, apiConfig } from '@/utils/axios';
import { ErrorResponseDTO } from '@/types';

export type LoginRequestDto = {
    username: string,
    password: string,
};

export type LoginSuccessResponseDTO = {
    accessToken: string,
    refreshToken: string,
};

export type LoginResponseDTO = LoginSuccessResponseDTO|ErrorResponseDTO;

export function login(data: LoginRequestDto): Promise<LoginResponseDTO> {
    return axios.post(apiConfig.apis.login.httpPOST, data);
}

import { LoginResponseDTO } from '@/pages/LoginPage/api';
import { ErrorResponseDTO } from '@/types';

type LoginMockResponseDTO = {
    success: LoginResponseDTO,
    refresh: LoginResponseDTO,
    unauthorized: ErrorResponseDTO,
};

export const login: LoginMockResponseDTO = {
    success: {
        "accessToken": "success-access-token",
        "refreshToken": "success-refresh-token",
    },
    refresh: {
        "accessToken": "refresh-access-token",
        "refreshToken": "refresh-refresh-token",
    },
    unauthorized: {
      "name": "UNAUTHORIZED",
      "httpStatus": "UNAUTHORIZED",
      "message": "인증에 실패했습니다."
    },
};

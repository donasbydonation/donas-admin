import { GetAccessTokenResponseDTO } from '@/utils/auth';
import { ErrorResponseDTO } from '@/types';

type LoginMockResponseDTO = {
    success: GetAccessTokenResponseDTO,
    refresh: GetAccessTokenResponseDTO,
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

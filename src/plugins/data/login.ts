import { LoginResponseDTO } from '@/pages/LoginPage/api';
import { ErrorResponseDTO } from '@/types';

type LoginMockResponseDTO = {
    success: LoginResponseDTO,
    unauthorized: ErrorResponseDTO,
};

export const login: LoginMockResponseDTO = {
    success: {
        "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTY3NjM1MTUwNSwiZXhwIjoxNjc2MzUyMTA1fQ.m9zrhu9WiwkxUjM1arb9fSHhq06ZFmmNRxGGhFXenyJ3RGmU4p4QbaiN-lNXdp_hUR_WJyuOF9-46s2cQQ4NfA",
        "refreshToken": "538f6627-5ea5-4899-bda3-134a9988a183"
    },
    unauthorized: {
      "name": "UNAUTHORIZED",
      "httpStatus": "UNAUTHORIZED",
      "message": "인증에 실패했습니다."
    },
};

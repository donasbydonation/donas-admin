import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { CreatorInfo } from '@/types';

export type GetCreatorsResponseDTO = {
    totalPages: number,
    currentPage: number,
    content: Array<CreatorInfo>,
};

export function getCreators(page: string|null): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        headers: {
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
        },
        params: {
            page: page || "1",
        },
    });
}

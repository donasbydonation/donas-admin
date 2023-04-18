import { axios, apiConfig } from '@/utils/axios';
import { CreatorInfo } from '@/types';

export type GetCreatorsResponseDTO = {
    totalPages: number,
    currentPage: number,
    content: Array<CreatorInfo>,
};

export function getCreators(page: string|null): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        params: {
            page: page || "1",
        },
    });
}

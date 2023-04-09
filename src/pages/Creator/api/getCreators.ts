import { axios, apiConfig } from '@/utils/axios';
import { TableDataProps } from '../components';

export type GetCreatorsResponseDTO = {
    totalPages: number,
    currentPage: number,
    content: Array<TableDataProps>,
};

export function getCreators(token: string, currentPage: string): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        headers: {
            Authorization: token,
        },
        params: {
            currentPage,
        },
    });
}

import { axios, apiConfig } from '@/utils/axios';
import { getAccessToken } from '@/utils/token';
import { TableDataProps } from '../components';

export type GetCreatorsResponseDTO = {
    totalPages: number,
    currentPage: number,
    content: Array<TableDataProps>,
};

export function getCreators(currentPage: string): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        headers: {
            Authorization: getAccessToken(),
        },
        params: {
            currentPage,
        },
    });
}

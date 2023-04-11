import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { TableDataProps } from '../components';

export type GetCreatorsResponseDTO = {
    totalPages: number,
    currentPage: number,
    content: Array<TableDataProps>,
};

export function getCreators(currentPage: string): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        headers: {
            Authorization: getCookie(cookieConfig.names.accessToken),
        },
        params: {
            currentPage,
        },
    });
}

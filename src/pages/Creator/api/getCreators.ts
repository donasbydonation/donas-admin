import { axios, apiConfig } from '@/utils/axios';
import { TableDataProps } from '../components';

export type GetCreatorsResponseDTO = Array<TableDataProps>;

export function getCreators(token: string): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        headers: {
            Authorization: token,
        },
    });
}

import { axios, apiConfig } from '@/utils/axios';

type GetAllCreatorsResponseListItemDTO = {
    id: number,
    name: string,
};

export type GetAllCreatorsResponseDTO = GetAllCreatorsResponseListItemDTO[];

export function getAllCreators(): Promise<GetAllCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.all.httpGET);
}

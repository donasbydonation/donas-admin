import { axios, apiConfig } from '@/utils/axios';
import { CreatorInfoShort } from '@/types';

export type GetAllCreatorsResponseDTO = Array<CreatorInfoShort>;

export function getAllCreators(): Promise<GetAllCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.all.httpGET);
}

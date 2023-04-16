import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { CreatorInfoShort } from '@/types';

export type GetAllCreatorsResponseDTO = Array<CreatorInfoShort>;

export function getAllCreators(): Promise<GetAllCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.all.httpGET, {
        headers: {
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
        },
    });
}

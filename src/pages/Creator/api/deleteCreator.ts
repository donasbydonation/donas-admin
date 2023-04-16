import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';

export type DeleteCreatorResponseDTO = null;

export function deleteCreator(id: number): Promise<DeleteCreatorResponseDTO> {
    return axios.delete(apiConfig.apis.creators.httpDELETE.path.getString(id), {
        headers: {
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
        },
    });
}

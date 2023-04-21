import { axios, apiConfig } from '@/utils/axios';

export type DeleteCreatorResponseDTO = null;

export function deleteCreator(id: number): Promise<DeleteCreatorResponseDTO> {
    return axios.delete(apiConfig.apis.creators.httpDELETE.path.getString(id));
}

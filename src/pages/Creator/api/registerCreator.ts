import { axios, apiConfig } from '@/utils/axios';
import { CreatorInfo } from '@/types';

export type RegisterCreatorRequestDTO = {
    profile: File,
    creatorInfo: Omit<CreatorInfo, "id"|"profileImage">
};

export type RegisterCreatorResponseDTO = null;

export function registerCreator(body: RegisterCreatorRequestDTO): Promise<RegisterCreatorResponseDTO> {
    const formData = new FormData();
    formData.append("profile", body.profile);
    formData.append("creatorInfo", JSON.stringify(body.creatorInfo));

    return axios.post(apiConfig.apis.creators.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data",
        },
    });
}

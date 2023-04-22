import { axios, apiConfig } from '@/utils/axios';
import { CreatorInfo } from '@/types';

export type ModifyCreatorRequestDTO = {
    profile: File,
    creator: Omit<CreatorInfo, "id"|"profileImage">,
};
export type ModifyCreatorResponseDTO = null;

export function modifyCreator(
    id: number,
    body: ModifyCreatorRequestDTO,
): Promise<ModifyCreatorResponseDTO> {
    const formData = new FormData();
    formData.append("profile", body.profile);
    formData.append("creator", JSON.stringify(body.creator));

    return axios.put(apiConfig.apis.creators.httpPUT.path.getString(id), formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

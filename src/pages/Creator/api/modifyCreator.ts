import { axios, apiConfig } from '@/utils/axios';

type PlatformInfo = {
    platform: "afreecatv"|"twitch"|"youtube",
    broadcastLink: string,
};

export type ModifyCreatorRequestDTO = {
    profile: File,
    creatorInfo: {
        id: number,
        name: string,
        platforms: PlatformInfo[],
    },
};

export type ModifyCreatorResponseDTO = number;

export function modifyCreator(body: ModifyCreatorRequestDTO): Promise<ModifyCreatorResponseDTO> {
    const formData = new FormData();
    formData.append("profile", body.profile);
    formData.append("creatorInfo", JSON.stringify(body.creatorInfo));

    return axios.put(apiConfig.apis.creators.httpPUT, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

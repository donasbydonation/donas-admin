import { axios, apiConfig } from '@/utils/axios';

type PlatformInfo = {
    platform: "afreeca"|"twitch"|"youtube",
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
    const formData = {
        profile: body.profile,
        creatorInfo: new Blob([JSON.stringify(body.creatorInfo)], {type: "application/json"}),
    };

    return axios.put(apiConfig.apis.creators.httpPUT, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

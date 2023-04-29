import { axios, apiConfig } from '@/utils/axios';

type PlatformInfo = {
    platform: "afreeca"|"twitch"|"youtube",
    broadcastLink: string,
};

export type RegisterCreatorRequestDTO = {
    profile: File,
    creatorInfo: {
        name: string,
        platforms: PlatformInfo[],
    },
};

export type RegisterCreatorResponseDTO = null;

export function registerCreator(body: RegisterCreatorRequestDTO): Promise<RegisterCreatorResponseDTO> {
    const formData = {
        profile: body.profile,
        creatorInfo: new Blob([JSON.stringify(body.creatorInfo)], {type: "application/json"}),
    };

    return axios.post(apiConfig.apis.creators.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data",
        },
    });
}

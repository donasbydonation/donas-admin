import { axios, apiConfig } from '@/utils/axios';
import { PlatformInfo, CreatorInfo } from '../types';

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
        creatorInfo: new CreatorInfo(body.creatorInfo.name, body.creatorInfo.platforms).blob,
    };

    return axios.post(apiConfig.apis.creators.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data",
        },
    });
}

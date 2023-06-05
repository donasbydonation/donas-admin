import { axios, apiConfig } from '@/utils/axios';
import { CreatorInfo, PlatformInfo } from '../types';

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
        creatorInfo: new CreatorInfo(body.creatorInfo.name, body.creatorInfo.platforms, body.creatorInfo.id).blob,
    };

    return axios.put(apiConfig.apis.creators.httpPUT, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

import { axios, apiConfig } from '@/utils/axios';
import * as types from '@/types';

const PAGE_NUM_DEFAULT = "1";
const PAGE_SIZE_DEFAULT = "10";

type PlatformResponse = {
    platformId: number,
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
};
type CreatorInfo = {
    creatorInfoId: number,
    name: string,
    profileImage: string,
    platformResponses: PlatformResponse[],
};

export type GetCreatorsResponseDTO = {
    totalPage: number,
    creatorInfos: CreatorInfo[],
};

export function getCreators(page: string|null): Promise<GetCreatorsResponseDTO> {
    return axios.get(apiConfig.apis.creators.httpGET, {
        params: {
            page: parseInt(page || PAGE_NUM_DEFAULT) - 1,
            size: PAGE_SIZE_DEFAULT,
        },
    });
}

export function creatorInfoShim(creator: CreatorInfo): types.CreatorInfo {
    return {
        id: creator.creatorInfoId,
        profileImage: creator.profileImage,
        name: creator.name,
        youtubeURL: creator.platformResponses.find(p => (p.provider === "YOUTUBE"))?.broadcastLink || "",
        twitchURL: creator.platformResponses.find(p => (p.provider === "TWITCH"))?.broadcastLink || "",
        africaURL: creator.platformResponses.find(p => (p.provider === "AFREECA"))?.broadcastLink || "",
    };
}

import { axios, apiConfig } from '@/utils/axios';
import * as types from '@/types';

const PAGE_NUM_DEFAULT = "1";
const PAGE_SIZE_DEFAULT = "10";

type Platform = {
    platformId: number,
    provider: "AFREECA"|"TWITCH"|"YOUTUBE",
    broadcastLink: string,
};

type Schedule = {
    scheduleId: number,
    creatorId: number,
    creatorName: string,
    profileImage: string,
    platforms: Platform[],
    title: string,
    bannerImage: string,
    description: string,
    scheduledTime: string,
};

export type GetSchedulesResponseDTO = {
    totalPage: number,
    schedules: Schedule[],
};

export function getSchedules(page: string|null): Promise<GetSchedulesResponseDTO> {
    return axios.get(apiConfig.apis.schedules.httpGET, {
        params: {
            page: parseInt(page || PAGE_NUM_DEFAULT) - 1,
            size: PAGE_SIZE_DEFAULT,
        },
    });
}

export function scheduleInfoShim(schedule: Schedule): types.ScheduleInfo {
    return {
        id: schedule.scheduleId,
        creator: {
            id: schedule.creatorId,
            profileImage: schedule.profileImage,
            name: schedule.creatorName,
            youtubeURL: schedule.platforms.find(p => (p.provider === "YOUTUBE"))?.broadcastLink || "",
            twitchURL: schedule.platforms.find(p => (p.provider === "TWITCH"))?.broadcastLink || "",
            africaURL: schedule.platforms.find(p => (p.provider === "AFREECA"))?.broadcastLink || "",
        },
        bannerImage: schedule.bannerImage,
        name: schedule.title,
        description: schedule.description,
        datetime: schedule.scheduledTime,
    };
}

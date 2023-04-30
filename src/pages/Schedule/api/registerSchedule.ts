import { axios, apiConfig } from '@/utils/axios';

export type RegisterScheduleRequestDTO = {
    banner: File,
    schedule: {
        creatorId: number,
        title: string,
        description: string,
        scheduledTime: string,
    },
};

export type RegisterScheduleResponseDTO = null;

export function registerSchedule(body: RegisterScheduleRequestDTO): Promise<RegisterScheduleResponseDTO> {
    const formData = {
        banner: body.banner,
        schedule: new Blob([JSON.stringify(body.schedule)], {type: "application/json"}),
    };

    return axios.post(apiConfig.apis.schedules.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

import { axios, apiConfig } from '@/utils/axios';

export type ModifyScheduleRequestDTO = {
    banner: File,
    schedule: {
        scheduleId: number,
        creatorId: number,
        title: string,
        description: string,
        scheduledTime: string,
    },
};

export type ModifyScheduleResponseDTO = null;

export function modifySchedule(body: ModifyScheduleRequestDTO): Promise<ModifyScheduleResponseDTO> {
    const formData = {
        banner: body.banner,
        schedule: new Blob([JSON.stringify(body.schedule)], {type: "application/json"}),
    };

    return axios.put(apiConfig.apis.schedules.httpPUT, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

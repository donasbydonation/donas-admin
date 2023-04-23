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
    const formData = new FormData();
    formData.append("banner", body.banner);
    formData.append("schedule", JSON.stringify(body.schedule));

    return axios.post(apiConfig.apis.schedules.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { ScheduleInfo } from '@/types';

export type RegisterScheduleRequestDTO = {
    banner: File
    schedule: Omit<ScheduleInfo, "id"|"bannerImage">,
};
export type RegisterScheduleResponseDTO = null;

export function registerSchedule(body: RegisterScheduleRequestDTO): Promise<RegisterScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", body.banner);
    formData.append("schedule", JSON.stringify(body.schedule));

    return axios.post(apiConfig.apis.schedules.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
            "Content-Type": 'multipart/form-data',
        },
    });
}

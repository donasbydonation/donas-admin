import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { ScheduleInfo } from '@/types';

type Schedule = Omit<ScheduleInfo, "id"|"bannerImage">;

export type RegisterScheduleResponseDTO = null;

export function registerSchedule(
    banner: File,
    schedule:Schedule 
): Promise<RegisterScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", banner);
    formData.append("schedule", JSON.stringify(schedule));

    return axios.post(apiConfig.apis.schedules.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
            "Content-Type": 'multipart/form-data',
        },
    });
}

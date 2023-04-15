import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { ScheduleInfo } from '@/types';

export type RegisterSchedule = Omit<ScheduleInfo, "id">;
export type RegisterScheduleResponseDTO = null;

export function registerSchedule(args: RegisterSchedule): Promise<RegisterScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", args.bannerImage as File);
    formData.append("schedule", JSON.stringify(args));

    return axios.post(apiConfig.apis.schedules.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
            "Content-Type": 'multipart/form-data',
        },
    });
}

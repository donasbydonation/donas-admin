import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { ScheduleInfo } from '@/types';

export type ModifySchedule = Omit<ScheduleInfo, "id"|"creator">;
export type ModifyScheduleResponseDTO = null;

export function modifySchedule(id: number, schedule: ModifySchedule): Promise<ModifyScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", schedule.bannerImage as File);
    formData.append("schedule", JSON.stringify(schedule));

    return axios.put(apiConfig.apis.schedules.httpPUT.path.getString(id), formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
            "Content-Type": 'multipart/form-data',
        },
    });
}

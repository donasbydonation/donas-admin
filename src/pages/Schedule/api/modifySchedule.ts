import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';
import { ScheduleInfo } from '@/types';

type Schedule = Omit<ScheduleInfo, "id"|"creator"|"bannerImage">;

export type ModifyScheduleResponseDTO = null;

export function modifySchedule(
    id: number,
    banner: File,
    schedule: Schedule,
): Promise<ModifyScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", banner);
    formData.append("schedule", JSON.stringify(schedule));

    return axios.put(apiConfig.apis.schedules.httpPUT.path.getString(id), formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
            "Content-Type": 'multipart/form-data',
        },
    });
}

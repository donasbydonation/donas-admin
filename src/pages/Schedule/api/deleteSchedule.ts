import { axios, apiConfig } from '@/utils/axios';
import { cookieConfig, getCookie } from '@/utils/cookie';

export type DeleteScheduleResponseDTO = null;

export function deleteSchedule(id: number): Promise<DeleteScheduleResponseDTO> {
    return axios.delete(apiConfig.apis.schedules.httpDELETE.path.getString(id), {
        headers: {
            "Authorization": `Bearer ${getCookie(cookieConfig.names.accessToken)}`,
        },
    });
}

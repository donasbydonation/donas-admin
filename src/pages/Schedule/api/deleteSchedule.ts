import { axios, apiConfig } from '@/utils/axios';

export type DeleteScheduleResponseDTO = number;

export function deleteSchedule(id: number): Promise<DeleteScheduleResponseDTO> {
    return axios.delete(apiConfig.apis.schedules.httpDELETE.path.getString(id));
}

import { axios, apiConfig } from '@/utils/axios';
import { ScheduleInfo } from '@/types';

export type GetSchedulesResponseDTO = {
    context: {
        totalPages: number,
        currentPage: number,
    }
    content: Array<ScheduleInfo>,
};

export function getSchedules(page: string|null): Promise<GetSchedulesResponseDTO> {
    return axios.get(apiConfig.apis.schedules.httpGET, {
        params: {
            page: page || "1",
        },
    });
}

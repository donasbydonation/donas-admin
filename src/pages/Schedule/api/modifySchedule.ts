import { axios, apiConfig } from '@/utils/axios';
import { ScheduleInfo } from '@/types';

export type ModifyScheduleRequestDTO = {
    banner: File,
    schedule: Omit<ScheduleInfo, "id"|"creator"|"bannerImage">,
};
export type ModifyScheduleResponseDTO = null;

export function modifySchedule(
    id: number,
    body: ModifyScheduleRequestDTO,
): Promise<ModifyScheduleResponseDTO> {
    const formData = new FormData();
    formData.append("banner", body.banner);
    formData.append("schedule", JSON.stringify(body.schedule));

    return axios.put(apiConfig.apis.schedules.httpPUT.path.getString(id), formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

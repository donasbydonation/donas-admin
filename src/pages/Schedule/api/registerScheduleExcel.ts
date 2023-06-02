import { axios, apiConfig } from '@/utils/axios';

export type RegisterScheduleExcelRequestDTO = {
    excel: File,
};

export type RegisterScheduleExcelResponseDTO = null;

export function registerScheduleExcel(body: RegisterScheduleExcelRequestDTO): Promise<RegisterScheduleExcelResponseDTO> {
    const formData = body;

    return axios.post(apiConfig.apis.schedules.excel.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Content-Type": 'multipart/form-data',
        },
    });
}

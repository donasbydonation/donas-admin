import { axios } from '@/utils/axios';

export type AuthDTO = {
    id: string,
    pw: string,
};

export function loginFN(data: AuthDTO) {
    return axios.post("/posts", data);
}

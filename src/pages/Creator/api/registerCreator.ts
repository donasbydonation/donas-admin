import { axios, apiConfig } from '@/utils/axios';
import { getAccessToken } from '@/utils/token';

export type RegisterCreatorResponseDTO = null;

export function registerCreator(profileImage: File, name: string, youtubeURL: string, twitchURL: string, africaURL: string): Promise<RegisterCreatorResponseDTO> {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("name", name);
    formData.append("youtubeURL", youtubeURL);
    formData.append("twitchURL", twitchURL);
    formData.append("africaURL", africaURL);

    return axios.post(apiConfig.apis.creators.httpPOST, formData, {
        headers: {
            "Accept": "*/*",
            "Authorization": getAccessToken(),
            "Content-Type": 'multipart/form-data',
        },
    });
}
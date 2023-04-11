import { axios, apiConfig } from '@/utils/axios';

export type AddCreatorResponseDTO = null;

export function addCreator(token: string, profileImage: File, name: string, youtubeURL: string, twitchURL: string, africaURL: string): Promise<AddCreatorResponseDTO> {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("name", name);
    formData.append("youtubeURL", youtubeURL);
    formData.append("twitchURL", twitchURL);
    formData.append("africaURL", africaURL);

    return axios.post(apiConfig.apis.creators.httpPOST, formData, {
        headers: {
            "Authorization": token,
            "Content-Type": 'multipart/form-data',
        },
    });
}

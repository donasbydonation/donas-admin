import { axios, apiConfig } from '@/utils/axios';
// import { cookieConfig, getCookie } from '@/utils/cookie';
// import { CreatorInfo } from '@/types';
//
// export type RegisterCreator = Omit<CreatorInfo, "id">;
// export type RegisterCreatorResponseDTO = null;
//
// export function registerCreator(args: RegisterCreator): Promise<RegisterCreatorResponseDTO> {
//     const formData = new FormData();
//     formData.append("profileImage", args.profileImage as File);
//     formData.append("name", args.name);
//     formData.append("youtubeURL", args.youtubeURL);
//     formData.append("twitchURL", args.twitchURL);
//     formData.append("africaURL", args.africaURL);
//
//     return axios.post(apiConfig.apis.creators.httpPOST, formData, {
//         headers: {
//             "Accept": "*/*",
//             "Authorization": getCookie(cookieConfig.names.accessToken),
//             "Content-Type": 'multipart/form-data',
//         },
//     });
// }

import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginResponseDTO } from '@/pages/LoginPage/api';
import { GetCreatorsResponseDTO } from '@/pages/Creator/api';

if(process.env.NODE_ENV === "development") {
    console.log("Axios API Mock running");
    const mock = new MockAdapter(axios);

    mock.onPost(apiConfig.apis.login.httpPOST).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        const body: LoginResponseDTO = {
            "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTY3NjM1MTUwNSwiZXhwIjoxNjc2MzUyMTA1fQ.m9zrhu9WiwkxUjM1arb9fSHhq06ZFmmNRxGGhFXenyJ3RGmU4p4QbaiN-lNXdp_hUR_WJyuOF9-46s2cQQ4NfA",
            "refreshToken": "538f6627-5ea5-4899-bda3-134a9988a183"
        }
        return [200, body];
    });

    mock.onGet(apiConfig.apis.creators.httpGET).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        const body: GetCreatorsResponseDTO = [
            {
                profileImage: "https://yt3.googleusercontent.com/5O_8Px4SI2tD0mMppzZoApw53qy1R-8DUfvdxgNMDQsfnkG2S5cNTDJsWQckrQTuKnbZbw4yYg=s176-c-k-c0x00ffffff-no-rj",
                name: "송선생",
                youtubeURL: "https://www.youtube.com/@S_YW",
                twitchURL: "https://www.twitch.tv/thdduddns98",
                africaURL: "",
            }
        ];
        return [200, body];
    });
}

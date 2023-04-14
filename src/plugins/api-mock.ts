import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginResponseDTO } from '@/pages/LoginPage/api';
import { GetCreatorsResponseDTO } from '@/pages/Creator/api';

if(process.env.NODE_ENV === "development") {
    console.log("Axios API Mock running");
    const mock = new MockAdapter(axios);

    /**
     * Token HTTP_POST mock response
     */
    mock.onPost(apiConfig.apis.login.httpPOST).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        const body: LoginResponseDTO = {
            "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTY3NjM1MTUwNSwiZXhwIjoxNjc2MzUyMTA1fQ.m9zrhu9WiwkxUjM1arb9fSHhq06ZFmmNRxGGhFXenyJ3RGmU4p4QbaiN-lNXdp_hUR_WJyuOF9-46s2cQQ4NfA",
            "refreshToken": "538f6627-5ea5-4899-bda3-134a9988a183"
        }
        return [200, body];
    });

    /**
     * Creators HTTP_GET mock responses
     */
    mock.onGet(apiConfig.apis.creators.httpGET, {params: {currentPage: "1"}}).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        console.log("[AxiosMock/RequestInfo/param] " + req.params.currentPage);
        const body: GetCreatorsResponseDTO = {
            totalPages: 3,
            currentPage: 1,
            content: [
                {
                    id: 1,
                    profileImage: "https://yt3.googleusercontent.com/5O_8Px4SI2tD0mMppzZoApw53qy1R-8DUfvdxgNMDQsfnkG2S5cNTDJsWQckrQTuKnbZbw4yYg=s176-c-k-c0x00ffffff-no-rj",
                    name: "송선생",
                    youtubeURL: "https://www.youtube.com/@S_YW",
                    twitchURL: "https://www.twitch.tv/thdduddns98",
                    africaURL: "",
                }
            ]
        };
        return [200, body];
    });

    mock.onGet(apiConfig.apis.creators.httpGET, {params: {currentPage: "2"}}).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        console.log("[AxiosMock/RequestInfo/param] " + req.params.currentPage);
        const body: GetCreatorsResponseDTO = {
            totalPages: 3,
            currentPage: 2,
            content: [
                {
                    id: 2,
                    profileImage: "https://yt3.googleusercontent.com/5O_8Px4SI2tD0mMppzZoApw53qy1R-8DUfvdxgNMDQsfnkG2S5cNTDJsWQckrQTuKnbZbw4yYg=s176-c-k-c0x00ffffff-no-rj",
                    name: "비행술 송선생",
                    youtubeURL: "https://www.youtube.com/@S_YW",
                    twitchURL: "https://www.twitch.tv/thdduddns98",
                    africaURL: "",
                }
            ]
        };
        return [200, body];
    });

    mock.onGet(apiConfig.apis.creators.httpGET, {params: {currentPage: "3"}}).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL] " + req.url);
        console.log("[AxiosMock/RequestInfo/param] " + req.params.currentPage);
        const body: GetCreatorsResponseDTO = {
            totalPages: 3,
            currentPage: 3,
            content: [
                {
                    id: 3,
                    profileImage: "https://yt3.googleusercontent.com/5O_8Px4SI2tD0mMppzZoApw53qy1R-8DUfvdxgNMDQsfnkG2S5cNTDJsWQckrQTuKnbZbw4yYg=s176-c-k-c0x00ffffff-no-rj",
                    name: "축지법 송선생",
                    youtubeURL: "https://www.youtube.com/@S_YW",
                    twitchURL: "https://www.twitch.tv/thdduddns98",
                    africaURL: "",
                }
            ]
        };
        return [200, body];
    });

    /**
     * Creator HTTP_POST mock responses
     */
    mock.onPost(apiConfig.apis.creators.httpPOST).reply((req) => {
        console.log("[AxiosMock/RequestInfo/URL]", req.url);
        console.log("[AxiosMock/RequestInfo/FormData]", {
            profileImage: req.data.get("profileImage"),
            name: req.data.get("name"),
            youtubeURL: req.data.get("youtubeURL"),
            twitchURL: req.data.get("twitchURL"),
            africaURL: req.data.get("africaURL"),
        });
        return [200, null];
    });
}

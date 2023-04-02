import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';

if(process.env.NODE_ENV === "development") {
    console.log("Axios API Mock running");
    const mock = new MockAdapter(axios);

    mock.onPost(apiConfig.apis.post.login).reply((req) => {
        console.log("[Mock:Req] " + req.url);
        const body = {
            "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImlhdCI6MTY3NjM1MTUwNSwiZXhwIjoxNjc2MzUyMTA1fQ.m9zrhu9WiwkxUjM1arb9fSHhq06ZFmmNRxGGhFXenyJ3RGmU4p4QbaiN-lNXdp_hUR_WJyuOF9-46s2cQQ4NfA",
            "refreshToken": "538f6627-5ea5-4899-bda3-134a9988a183"
        }
        return [200, body];
    });
}

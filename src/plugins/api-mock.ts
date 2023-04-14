import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from './data';
import { LoginResponseDTO } from '@/pages/LoginPage/api';
import { GetCreatorsResponseDTO } from '@/pages/Creator/api';

if(process.env.NODE_ENV === "development") {
    console.log("Axios API Mock running");
    const mock = new MockAdapter(axios);

    /**
     * Token HTTP_POST mock response
     */
    mock.onPost(apiConfig.apis.login.httpPOST).reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            body: req.data,
        }));
        return [200, data.login];
    });

    /**
     * Creators HTTP_GET mock responses
     */
    for (let i = 0; i < data.creatorPages.length; i++) {
        mock.onGet(apiConfig.apis.creators.httpGET, {params: {currentPage: `${i + 1}`}})
        .reply((req) => {
            console.log(JSON.stringify({
                timestamp: (new Date()).toString(),
                url: req.url,
                params: `?currentPage=${req.params.currentPage}`,
            }));
            return [200, data.creatorPages[i]];
        });
    }

    /**
     * Creator HTTP_POST mock responses
     */
    mock.onPost(apiConfig.apis.creators.httpPOST).reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            formData: {
                profileImage: `File.name: ${req.data.get("profileImage").name}`,
                name: req.data.get("name"),
                youtubeURL: req.data.get("youtubeURL"),
                twitchURL: req.data.get("twitchURL"),
                africaURL: req.data.get("africaURL"),
            }
        }));
        return [200, null];
    });
}

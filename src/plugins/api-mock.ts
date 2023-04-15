import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from './data';

if(process.env.NODE_ENV === "development") {
    console.warn("Axios API Mock running");
    const mock = new MockAdapter(axios);

    /**
     * Token HTTP_POST mock response
     */
    mock.onPost(apiConfig.apis.login.httpPOST)
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            body: req.data,
        }));
        return [201, data.login];
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
    mock.onPost(apiConfig.apis.creators.httpPOST)
    .reply((req) => {
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
        return [201, null];
    });

    /**
     * Schedules HTTP_GET mock responses
     */
    for (let i = 0; i < data.schedulePages.length; i++) {
        mock.onGet(apiConfig.apis.schedules.httpGET, {params: {page: `${i + 1}`}})
        .reply((req) => {
            console.log(JSON.stringify({
                timestamp: (new Date()).toString(),
                url: req.url,
                params: `?page=${req.params.page}`,
            }));
            return [200, data.schedulePages[i]];
        });
    }

    /**
     * Schedules HTTP_GET mock responses
     */
    mock.onGet(apiConfig.apis.creators.all.httpGET)
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
        }));
        return [200, data.allCreators];
    });

    /**
     * Schedule HTTP_POST mock responses
     */
    mock.onPost(apiConfig.apis.schedules.httpPOST)
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            formData: {
                banner: `File.name: ${req.data.get("banner").name}`,
                schedule: req.data.get("schedule"),
            }
        }));
        return [201, null];
    });

    /**
     * Schedule HTTP_DELETE mock response
     */
    mock.onDelete(apiConfig.apis.schedules.httpDELETE.path.getRegex())
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
        }));
        return [200, null];
    });
}

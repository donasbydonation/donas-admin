import { axios, apiConfig } from '@/utils/axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from './data';
import testing from './index.t';

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

        if (testing.login.unauthorizedForInvaidUsername(req)) {
            return [401, data.login.unauthorized]
        } else {
            return [201, data.login.success];
        }
    });

    /**
     * RefreshToken HTTP_POST mock response
     */
    mock.onPost(apiConfig.apis.refresh.httpPOST)
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            body: req.data,
        }));

        if (testing.refresh.authorizedForValidRefreshToken(req)) {
            return [201, data.login.refresh];
        } else {
            return [401, data.login.unauthorized];
        }
    });

    /**
     *
     * Creators HTTP_GET mock responses
     */
    for (let i = 0; i < data.creatorPages.length; i++) {
        mock.onGet(apiConfig.apis.creators.httpGET, {params: {page: `${i + 1}`}})
        .reply((req) => {
            console.log(JSON.stringify({
                timestamp: (new Date()).toString(),
                url: req.url,
                auth: req.headers?.Authorization,
                params: `?page=${req.params.page}`,
            }));

            if (testing.creators.unauthorizedForInvalidAccessToken(req)) {
                return [401, data.login.unauthorized];
            } else {
                return [200, data.creatorPages[i]];
            }
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
            auth: req.headers?.Authorization,
            formData: {
                profile: `File.name := ${req.data.get("profile").name}`,
                creatorInfo: req.data.get("creatorInfo"),
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
            auth: req.headers?.Authorization,
            formData: {
                banner: `File.name := ${req.data.get("banner").name}`,
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

    /**
     * Schedule HTTP_PUT mock responses
     */
    mock.onPut(apiConfig.apis.schedules.httpPUT.path.getRegex())
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            formData: {
                banner: `File.name := ${req.data.get("banner").name}`,
                schedule: req.data.get("schedule"),
            }
        }));
        return [200, null];
    });

    /**
     * Creator HTTP_DELETE mock response
     */
    mock.onDelete(apiConfig.apis.creators.httpDELETE.path.getRegex())
    .reply((req) => {
        const creatorId = parseInt(req.url?.split("/").pop() as string)
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            auth: req.headers?.Authorization,
            pathVariable: `creatorId := ${creatorId}`,
        }));
        return [200, creatorId];
    });

    /**
     * Creator HTTP_PUT mock responses
     */
    mock.onPut(apiConfig.apis.creators.httpPUT)
    .reply((req) => {
        console.log(JSON.stringify({
            timestamp: (new Date()).toString(),
            url: req.url,
            auth: req.headers?.Authorization,
            formData: {
                profile: `File.name: ${req.data.get("profile").name}`,
                creatorInfo: req.data.get("creatorInfo"),
            }
        }));
        return [200, req.data.get("creatorInfo").id];
    });
}

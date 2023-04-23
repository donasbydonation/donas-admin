import { GetCreatorsResponseDTO } from '@/pages/Creator/api';

export const creatorPages: Array<GetCreatorsResponseDTO> = [
    {
        totalPage: 3,
        creatorInfos: [
            {
                creatorInfoId: 1,
                name: "송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platformResponses: [
                    {
                        platformId: 1,
                        provider: "YOUTUBE",
                        broadcastLink: "https://www.youtube.com/@S_YW",
                    },
                    {
                        platformId: 2,
                        provider: "TWITCH",
                        broadcastLink: "https://www.twitch.tv/thdduddns98",
                    },
                ],
            }
        ]
    },
    {
        totalPage: 3,
        creatorInfos: [
            {
                creatorInfoId: 2,
                name: "축지법 송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platformResponses: [
                    {
                        platformId: 3,
                        provider: "YOUTUBE",
                        broadcastLink: "https://www.youtube.com/@S_YW",
                    },
                    {
                        platformId: 4,
                        provider: "AFREECA",
                        broadcastLink: "https://bj.afreecatv.com/lovefaith0",
                    },
                ],
            }
        ]
    },
    {
        totalPage: 3,
        creatorInfos: [
            {
                creatorInfoId: 3,
                name: "비행술 송선생",
                profileImage: "https://yt3.ggpht.com/bHK1E0WBTePF6n5EgRTnEIcmqbnHeuJ8_2NZz5WwB5ggOZlAzWHCwK7_6rlcJeqp0Lci4bHq7w=s176-c-k-c0x00ffffff-no-rj-mo",
                platformResponses: [
                    {
                        platformId: 5,
                        provider: "TWITCH",
                        broadcastLink: "https://www.twitch.tv/thdduddns98",
                    },
                    {
                        platformId: 6,
                        provider: "AFREECA",
                        broadcastLink: "https://bj.afreecatv.com/lovefaith0",
                    },
                ],
            }
        ]
    },
];
